import { resolve } from "path";
import history from "connect-history-api-fallback";
import express from "express";
import configureAPI from "./configure";
const app = express();

const { PORT = 3000 } = process.env;

// API
configureAPI(app);

// UI
const publicPath = resolve(__dirname, "../dist");
const staticConf = { maxAge: "1y", etag: false };

app.use(express.static(publicPath, staticConf));
app.use("/", history());

// Go
app.listen(PORT, () => console.log(`App running on port ${PORT}!`));
