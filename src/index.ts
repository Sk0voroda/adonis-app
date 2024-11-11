import { Hono } from "hono";
import v1_scrapper from "./v1/scrapper";

const app = new Hono();

app.route("/v1", v1_scrapper);

export default app;
