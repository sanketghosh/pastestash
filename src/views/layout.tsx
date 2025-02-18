import { Child, PropsWithChildren } from "hono/jsx";

type LayoutProps = {
  cssFile?: string;
  pageTitle: string;
  pageDescription: string;
  children: Child;
};

/**
@description The Layout component serves as a wrapper for the entire application, providing a basic HTML structure and meta information for search engine optimization (SEO).
@param {PropsWithChildren<LayoutProps>} props - The properties passed to the Layout component.
@param {string} props.pageTitle - The title of the page, displayed in the browser's title bar and in search engine results.
@param {string} props.pageDescription - The meta description of the page for SEO purposes.
@param {string} props.cssFile - The URL of the CSS file to be linked in the HTML head.
@param {Child}  props.children - The content to be rendered within the layout.
@returns {JSX.Element} The JSX element representing the HTML structure of the application.
*/

export default function Layout({
  children,
  cssFile,
  pageDescription,
  pageTitle,
}: PropsWithChildren<LayoutProps>) {
  return (
    <html>
      <head>
        <title>PasteStash - {pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="stylesheet" href="/css/globals.css" />
        <link rel="stylesheet" href={cssFile} />
      </head>
      <body>
        <main class="main">
          <div class="container">{children}</div>
        </main>
      </body>
    </html>
  );
}
