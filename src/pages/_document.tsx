import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="antialiased w-full max-w-screen bg-secondary p-2 py-4">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
