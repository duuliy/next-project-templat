// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

// ./pages/_document.js
import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <html>
        <Head>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
          <meta charSet="UTF-8" content="text/html"/>
          <meta http-equiv="X-UA-Compatible" content="ie=edge" />
          <meta name="renderer" content="webkit" />
          <meta name="keywords" content="duuliy" />
          <meta name="description" content="duuliy" />
          <link rel='stylesheet' href='https://cdn.bootcss.com/antd/3.1.3/antd.css'/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}