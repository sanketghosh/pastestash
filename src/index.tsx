import { Hono } from "hono";
import { jsxRenderer } from "hono/jsx-renderer";
import { HomeView } from "./views/home-view";
import pasteRouter from "./routes/paste";
import { serveStatic } from "hono/bun";

const app = new Hono();

// Serve static files (CSS & JS)
app.use("/css/*", serveStatic({ root: "/public" }));
app.use("/js/*", serveStatic({ root: "/public" }));

app.use("*", jsxRenderer());

app.get("/", (c) => {
  return c.render(<HomeView />);
});

app.route("/paste", pasteRouter);

export default app;
