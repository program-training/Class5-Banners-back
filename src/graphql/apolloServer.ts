import { ApolloServer, BaseContext } from "@apollo/server";
import apolloLogger from "./logger/apolloLogger";
import typeDefs from "./typeDefs";
import resolvers from "./resolvers";
import { UserFromToken } from "../users/resolvers/userResolvers";

const server = new ApolloServer<UserFromToken | BaseContext>({
  typeDefs,
  resolvers,
  plugins: [apolloLogger],
});

export default server;
