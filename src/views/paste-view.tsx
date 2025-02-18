import Layout from "./layout";

export default function PasteView({ content }: { content: string }) {
  return (
    <Layout
      cssFile="/css/paste.css"
      pageTitle="Here's your paster"
      pageDescription="Check your paste here, or you can create a new."
    >
      <header class="header">
        <h1>Your Paste</h1>
      </header>
      <pre>{content}</pre>
      <p>
        <a href="/" class="btn">
          Create a new paste
        </a>
      </p>
    </Layout>
  );
}
