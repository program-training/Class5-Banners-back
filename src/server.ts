import "dotenv/config";
import { expressMiddleware } from "@apollo/server/express4";
import chalk from "chalk";
import BodyParser from "body-parser";
import { transporter } from "./utils/send-email";
import errors from "./errors/errors";
import connectToPostgreSQL from "./utils/connect-to-postgreSQL";
import connectToMongoDB from "./utils/connect-to-mongoDB";
import initialPostgreSQL from "./utils/initial-postgreSQL";
import initialMongo from "./utils/initial-mongo";
import axios from "axios";
import server from "./graphql/apolloServer";
import corsHandler from "./cors/custom-cors";
import morganLogger from "./logger/morgan-logger";
import express from "express";
import "dotenv/config";
import { handleServerError } from "./handlers/errorHandler";
import { ApolloServer } from "@apollo/server";
import redisClient from "./utils/connectToRedis";
import { createServer } from "http";
import { WebSocketServer } from "ws";
import { makeExecutableSchema } from "@graphql-tools/schema";
import typeDefs from "./graphql/typeDefs";
import resolvers from "./graphql/resolvers";
import { useServer } from "graphql-ws/lib/use/ws";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";

const PORT = process.env.PORT;

const app = express();
const httpServer = createServer(app);

const wsServer = new WebSocketServer({
  server: httpServer,
  path: "/graphql",
});

const schema = makeExecutableSchema({ typeDefs, resolvers });
const serverCleanup = useServer({ schema }, wsServer);
const apolloServer = new ApolloServer({
  schema,
  plugins: [
    ApolloServerPluginDrainHttpServer({ httpServer }),
    {
      async serverWillStart() {
        return {
          async drainServer() {
            await serverCleanup.dispose();
          },
        };
      },
    },
  ],
});
export const start = async () => {
  try {
    if (!PORT) throw new Error(errors.portMissing);
    apolloServer
      .start()
      .then(async () => {
        app.use(
          "/graphql",
          corsHandler,
          BodyParser.json(),
          handleServerError,
          morganLogger,
          expressMiddleware(apolloServer)
        );

        console.log(chalk.blue("testing products server..."));
        if (!process.env.ERP_BASE_URL)
          throw new Error(errors.productsURLmissing);
        await axios.get(process.env.ERP_BASE_URL);
        console.log(chalk.green("products server is up"));

        console.log(chalk.blue("connecting to redis..."));
        await redisClient.connect();
        if (redisClient.isReady) console.log(chalk.green("connected to redis"));

        console.log(chalk.blue("connecting to mongoBD..."));
        if (!process.env.MONGODB_URI) throw new Error(errors.mongoDBURImissing);
        await connectToMongoDB(process.env.MONGODB_URI);
        console.log(chalk.green("connected to mongoDB"));

        console.log(chalk.blue("connecting to postgreSQL..."));
        if (!process.env.POSTGRESQL_CONNECTION_STRING)
          throw new Error(errors.postgreSQLconStrMissing);
        await connectToPostgreSQL();
        console.log(chalk.green("connected to postgreSQL"));

        console.log(chalk.blue("initializing databases..."));
        await initialPostgreSQL();
        await initialMongo();
        console.log(chalk.green("databases initialized successfully"));

        console.log(chalk.blue("verifying gmail client..."));
        if (!process.env.GMAIL_USERNAME) throw new Error(errors.gmailUNmissing);
        if (!process.env.GMAIL_APP_PASSWORD)
          throw new Error(errors.gmailPWmissing);
        await transporter.verify();
        console.log(chalk.green("gmail verification succeed"));

        console.log(chalk.green("dependencies test passed"));

        if (!process.env.JWT_SECRET) throw new Error(errors.JWTkeyMissing);

        httpServer.listen({ port: PORT }, () =>
          console.log(
            chalk.blueBright(
              `🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`
            )
          )
        );
      })
      .catch((error) => console.log(chalk.redBright(error.message)));
  } catch (error) {
    console.log(chalk.redBright(error));
  }
};

start();
