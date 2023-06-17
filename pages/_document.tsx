import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel='apple-touch-icon' href='/apple-touch-icon.png' sizes="200x200" type='image/png'/>
      </Head>
      <body className="bg-Black">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
