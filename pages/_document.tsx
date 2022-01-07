import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import type { DocumentProps } from 'next/document';

export default function CustomDocument(props: DocumentProps): JSX.Element {
  return (
    <Html className="dark">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=OpenSans:300,400,500,700&display=swap"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

CustomDocument.getInitialProps = NextDocument.getInitialProps;