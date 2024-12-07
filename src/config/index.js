import Development from "./dev";
import Production from "./prod";

const env = process.env.NODE_ENV || "development";

export const config = env === "development" ? Development : Production;
