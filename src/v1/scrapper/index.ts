import { Hono } from "hono";
import { Type } from "@sinclair/typebox";
import { TypeCompiler } from "@sinclair/typebox/compiler";

const v1_scrapper = new Hono();

const Link = TypeCompiler.Compile(Type.String({ minLength: 1, pattern: "^https://\\S+" }));

v1_scrapper.get("/product", (c) => {
	const link = c.req.query("link");

	if (!Link.Check(link)) {
		console.log();

		c.status(400);
		return c.json({ status: "bad_link" });
	}

	return c.json({ link });
});

export default v1_scrapper;
