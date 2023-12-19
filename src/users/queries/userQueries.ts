import {
  deleteUserService,
  getUserService,
  loginService,
  signup,
  updatedUserService,
} from "../resolvers/userResolvers";

export const userQueries = {
  getUserService,
  loginService,
};

export const userMutations = {
  signup,
  deleteUserService,
  updatedUserService,
};
