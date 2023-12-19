import {
  typeBanner,
  typeBannerMutation,
  typeBannerQueries,
  typeBannerSub,
} from "../banners/GraphQl/types/typesDef";
import UserTypes, {
  userInputs,
  userTypesMutation,
  userTypesQuery,
} from "../users/typeRefs/userTypes";

const typeDefs = `#graphql
 ${UserTypes}
 ${typeBanner}

type Query{
${userTypesQuery}
${typeBannerQueries}
}
,
type Mutation{
${userTypesMutation}
${typeBannerMutation}

},
type Subscription{
${typeBannerSub}
}

,${userInputs},

,
`;

export default typeDefs;
