import { Hono } from "hono";
import { jsxRenderer } from "hono/jsx-renderer";
import { prisma } from "../lib/prisma";
import { nanoid } from "nanoid";
import PasteView from "../views/paste-view";

const pasteRouter = new Hono();

// enabling jsx rendering
pasteRouter.use("*", jsxRenderer());

// create a new paste
pasteRouter.post("/", async (c) => {
  const { content } = await c.req.json();

  // if content does not exist
  if (!content) {
    return c.json({ error: "Content cannot be empty" }, 400);
  }

  const paste = await prisma.bin.create({
    data: {
      content: content,
      shortId: nanoid(),
    },
  });

  return c.json({
    url: `/paste/${paste.shortId}`,
  });
});

// view the pasted stuff
pasteRouter.get("/:id", async (c) => {
  const id = c.req.param("id");

  const paste = await prisma.bin.findUnique({
    where: {
      shortId: id,
    },
  });

  if (!paste) {
    return c.json(
      {
        error: "Paste not found",
      },
      404
    );
  }

  return c.render(<PasteView content={paste.content} />);
});

// raw view
pasteRouter.get("/raw/:id", async (c) => {
  const id = c.req.param("id");
  const paste = await prisma.bin.findUnique({
    where: {
      shortId: id,
    },
  });

  return c.json({ content: paste?.content }, 200);
});

export default pasteRouter;
