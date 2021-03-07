import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="es">
        <Head>
          <link
            rel="preload"
            as="font"
            href="https://www.formula1.com/etc/designs/fom-website/fonts/F1Regular/Formula1-Regular.woff2"
            type="font/woff2"
            crossorigin="anonymous"
          />
          <link
            rel="preload"
            as="font"
            href="https://www.formula1.com/etc/designs/fom-website/fonts/F1RegularItalic/Formula1-Italic.woff2"
            type="font/woff2"
            crossorigin="anonymous"
          />
          <link
            rel="preload"
            as="font"
            href="https://www.formula1.com/etc/designs/fom-website/fonts/F1Bold/Formula1-Bold.woff2"
            type="font/woff2"
            crossorigin="anonymous"
          />
          <link
            rel="preload"
            as="font"
            href="https://www.formula1.com/etc/designs/fom-website/fonts/F1Black/Formula1-Black.woff2"
            type="font/woff2"
            crossorigin="anonymous"
          />
          <link
            rel="preload"
            as="font"
            href="https://www.formula1.com/etc/designs/fom-website/fonts/F1Wide/Formula1-Wide.woff2"
            type="font/woff2"
            crossorigin="anonymous"
          />
          <link
            rel="preload"
            as="font"
            href="https://www.formula1.com/etc/designs/fom-website/fonts/F1YEAR/F1YEARRegular.woff2"
            type="font/woff2"
            crossorigin="anonymous"
          />
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-NQKS9BFTLJ"></script>
          <script dangerouslySetInnerHTML={{
            __html: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-NQKS9BFTLJ');
  `
          }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
