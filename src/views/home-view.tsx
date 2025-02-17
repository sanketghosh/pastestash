export const HomeView = () => {
  return (
    <html>
      <head>
        <title>PasteStash - Paste you stuff</title>
        <link rel="stylesheet" href="/css/home.css" />
      </head>
      <body>
        <main class="main">
          <div class="container">
            <header class="header">
              <h1>PasteStash</h1>
            </header>
            <textarea
              id="paste-area"
              class="paste-area"
              rows={10}
              cols={50}
              placeholder="Enter your paste"
            ></textarea>
            <br />
            <button id="save-btn" class="save-btn">
              Save Bin
            </button>
          </div>
        </main>
        <script src="/js/script.js"></script>
      </body>
    </html>
  );
};
