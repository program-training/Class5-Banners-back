import "dotenv/config";
import chalk from "chalk";
import { transporter } from "./utils/send-email";
import errors from "./errors/errors";
import connectToPostgreSQL from "./utils/connect-to-postgreSQL";
import connectToMongoDB from "./utils/connect-to-mongoDB";
import initialPostgreSQL from "./utils/initial-postgreSQL";
import initialMongo from "./utils/initial-mongo";
import axios from "axios";
import { startStandaloneServer } from "@apollo/server/standalone";
import server from "./graphql/apolloServer";
import { authorizationMiddleWare } from "./middleware/authorization";

const PORT = process.env.PORT;

export const start = async () => {
  try {
    if (!PORT) throw new Error(errors.portMissing);

    const { url } = await startStandaloneServer(server, {
      listen: { port: +PORT },
      context: authorizationMiddleWare,
    });

    console.log(chalk.green(`server is running on port ${PORT}`));
    console.log(`${chalk.green("server is running on")} ${url}`);

    console.log(chalk.blue("testing products server..."));
    if (!process.env.ERP_BASE_URL) throw new Error(errors.productsURLmissing);
    await axios.get(process.env.ERP_BASE_URL);
    console.log(chalk.green("products server is up"));

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
    if (!process.env.GMAIL_APP_PASSWORD) throw new Error(errors.gmailPWmissing);
    await transporter.verify();
    console.log(chalk.green("gmail verification succeed"));

    console.log(chalk.green("dependencies test passed"));

    if (!process.env.JWT_SECRET) throw new Error(errors.JWTkeyMissing);
  } catch (error) {
    console.log(chalk.redBright(error));
  }
};

start();
