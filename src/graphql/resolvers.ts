import bannersMutation from "../banners/GraphQl/mutation/bannersMutation";
import bannersQueries from "../banners/GraphQl/query/bannersQueries";
import { userQueries, userMutations } from "../users/queries/userQueries";

const resolvers = {
  Query: { ...userQueries, ...bannersQueries },
  Mutation: {
    ...userMutations,
    ...bannersMutation,
  },
};

export default resolvers;
