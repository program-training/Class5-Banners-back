import { GraphQLError } from "graphql";
import { verifyToken } from "../models/jwt";
import { decode } from "jsonwebtoken";
import { StandaloneServerContextFunctionArgument } from "@apollo/server/dist/esm/standalone";
import { BaseContext } from "@apollo/server";
import { Request } from "express";

export const authorizationMiddleWare = ({
  req,
}: StandaloneServerContextFunctionArgument): Promise<BaseContext> => {
  if (
    (req as Request).body.operationName === "loginService" ||
    (req as Request).body.operationName === "Signup" ||
    (req as Request).body.operationName === "IntrospectionQuery" ||
    !req.headers.origin
  )
    return null as unknown as Promise<BaseContext>;
  const authToken = req.headers["authorization"] || "";

  const tokenPayload = decode(authToken);
  if (!verifyToken(authToken)) {
    throw new GraphQLError("User is not authenticated", {
      extensions: {
        code: "UNAUTHENTICATED",
        http: { status: 401 },
      },
    });
  }

  return tokenPayload as Promise<BaseContext>;
};
