import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link  href='/icons8-favicon-48.png'  type='image/ico'/>
      </Head>
      <body className="bg-Black">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
