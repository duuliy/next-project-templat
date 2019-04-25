import Head from 'next/head'


//为了seo三个关键字，这样每个页面可以设置不同的head
export default () =>
  <div>
    <Head>
      <title>duuliy is next</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <p>Hello world!</p>
  </div>