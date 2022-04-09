import NextDocument, { Html, Head, Main, NextScript } from 'next/document';

export default function CustomDocument(): JSX.Element {
  return (
    <Html className="dark">
      <Head>
        <link rel="icon" href="/learn-web-dev-logo-favicon.svg" />

        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta
          name="description"
          content="A compilation of resources from entry level coding to advanced development techniques, curated by one of the largest web development communities on Discord."
        />
        <meta
          name="keywords"
          content="how to learn web development, learn web development, learn web dev, how to learn web dev, how to learn frontend, frontend development, frontend, getting started with frontend development, getting started with web development, getting started with web dev"
        />
        <meta name="author" content="Wiktoria Mielcarek" />
        <meta name="copyright" content="Wiktoria Mielcarek" />

        {/* Facebook Meta Tags Open Graph */}
        <meta property="og:url" content="https://learn-web-dev.vercel.app" />
        <meta property="og:site_name" content="Learn Web Development" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Learn Web Development from Scratch"
        />
        <meta
          property="og:description"
          content="A compilation of resources from entry level coding to advanced development techniques, curated by one of the largest web development communities on Discord."
        />
        <meta property="og:image" content="/learn-web-dev-og-image.png" />

        {/* Twitter Meta Tags Open Graph */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@braweria" />
        <meta name="twitter:creator" content="@braweria" />
        <meta
          name="twitter:title"
          content="Learn Web Development from Scratch"
        />
        <meta property="twitter:domain" content="learn-web-dev.vercel.app" />
        <meta
          property="twitter:url"
          content="https://learn-web-dev.vercel.app"
        />
        <meta
          name="twitter:description"
          content="A compilation of resources from entry level coding to advanced development techniques, curated by one of the largest web development communities on Discord."
        />
        <meta name="twitter:image" content="/learn-web-dev-og-image.png" />
      </Head>
      <body className="bg-black-800 text-black-100">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

CustomDocument.getInitialProps = NextDocument.getInitialProps;
