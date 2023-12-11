import bannersMutation from "./mutation/bannersMutation";
import bannersQueries from "./query/bannersQueries";

const resolvers = {
  Query: {
    ...bannersQueries,
  },
  Mutation: {
    ...bannersMutation,
  },
};

export default resolvers;
