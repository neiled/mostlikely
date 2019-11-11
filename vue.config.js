import configureAPI from "./server/configure";

export const publicPath =
  process.env.NODE_ENV === "production" ? "/mostlikely/" : "/";
export const devServer = {
  before: configureAPI
};
