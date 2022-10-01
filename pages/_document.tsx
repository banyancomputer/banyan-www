import Document, { Head, Html, Main, NextScript } from 'next/document';
// A custom Document is commonly used to augment our application's <html> and <body> tags.
// Preload fonts, inject critical CSS, and more here.
// For docs on using Custom Documents: https://nextjs.org/docs/advanced-features/custom-document
class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
