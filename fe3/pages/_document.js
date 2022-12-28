import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      {/* 这里引入第三方或者static */}
      {/* 这里必须再次利用localhost+端口引入，否则会在本3002端口去寻找以下文件而报错404 */}
      <script src="http://localhost:3000/_next/static/chunks/component_Header_jsx.js" />
      <script src="http://localhost:3001/_next/static/chunks/src_utils_getSquareRoot_js.js" />
      {/* <script src="http://localhost:3000/_next/static/runtime/remoteEntry.js" />
      <script src="http://localhost:3001/_next/static/runtime/remoteEntry2.js" /> */}
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}