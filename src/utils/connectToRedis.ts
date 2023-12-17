import { createClient } from "redis";

const redisClient = createClient().on("error", (error) => console.log(error));

export default redisClient;
