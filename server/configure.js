import { json } from "body-parser";

export default app => {
  app.use(json());
};
