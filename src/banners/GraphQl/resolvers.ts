import bannersMutation from "./mutation/bannersMutation";
import bannersQueries from "./query/bannersQueries";
import { bannersSub } from "./subscription/subscription";

const resolvers = {
  Query: {
    ...bannersQueries,
  },
  Mutation: {
    ...bannersMutation,
  },
  Subscription: {
    ...bannersSub,
  },
};

export default resolvers;
