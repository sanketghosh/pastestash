import Plus from "./components/assets/plus";
import Layout from "./layout";

export default function HomeView() {
  return (
    <Layout
      cssFile="/css/home.css"
      pageTitle="Create your paste"
      pageDescription="Create your paste here, enter text in paste area and just click save"
    >
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
      <button id="save-btn" class="btn save-btn">
        <Plus />
        Create Your Paste
      </button>
      <script src="/js/script.js"></script>
    </Layout>
  );
}
