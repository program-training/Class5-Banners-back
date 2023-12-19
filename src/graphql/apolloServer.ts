import { ApolloServer } from "apollo-server-express";
import typeDefs from "./typeDefs";
import resolvers from "./resolvers";
import { authorizationMiddleWare } from "../middleware/authorization";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authorizationMiddleWare,
});

export default server;
