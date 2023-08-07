import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link  href='/favicon.ico'   type="image/x-icon" rel="icon"/>
      </Head>
      <body className="bg-Black">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
