import { createClient } from "redis";

const redisClient = createClient().on("error", (error: unknown) =>
  console.log(error)
);

export default redisClient;
