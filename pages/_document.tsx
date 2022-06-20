import NextDocument, { Html, Head, Main, NextScript } from 'next/document';

export default function CustomDocument(): JSX.Element {
  return (
    <Html className="dark">
      <Head />
      <body className="bg-black-900 text-black-100">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

CustomDocument.getInitialProps = NextDocument.getInitialProps;
