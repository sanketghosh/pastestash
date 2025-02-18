import { Hono } from "hono";
import { jsxRenderer } from "hono/jsx-renderer";
import pasteRouter from "./routes/paste";
import { serveStatic } from "hono/bun";
import { HomeView } from "./views/pages";

const app = new Hono();

// Serve static files (CSS & JS)
app.use("/css/*", serveStatic({ root: "/static" }));
app.use("/js/*", serveStatic({ root: "/static" }));
app.use("/assets/*", serveStatic({ root: "/public" }));

app.use("*", jsxRenderer());

app.get("/", (c) => {
  return c.render(<HomeView />);
});

app.route("/", pasteRouter);

export default app;
