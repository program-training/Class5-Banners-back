import bannersMutation from "../banners/GraphQl/mutation/bannersMutation";
import bannersQueries from "../banners/GraphQl/query/bannersQueries";
import { bannersSub } from "../banners/GraphQl/subscription/subscription";
import { userQueries, userMutations } from "../users/queries/userQueries";

const resolvers = {
  Query: { ...userQueries, ...bannersQueries },
  Mutation: {
    ...userMutations,
    ...bannersMutation,
  },
  Subscription: {
    ...bannersSub,
  },
};

export default resolvers;
