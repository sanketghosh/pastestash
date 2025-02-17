const PasteView = ({ content }: { content: string }) => {
  return (
    <html>
      <head>
        <title>PasteStash - Pasted stuff</title>
        <style>
          {`
          body { font-family: sans-serif; padding: 20px; }
          pre { background: #f4f4f4; padding: 10px; border-radius: 5px; }
          `}
        </style>
      </head>
      <body>
        <h1>Your Paste</h1>
        <pre>{content}</pre>
        <p>
          <a href="/">Create a new paste</a>
        </p>
      </body>
    </html>
  );
};

export default PasteView;
