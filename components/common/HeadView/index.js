import Head from 'next/head'
import { Button } from 'antd';

//为了seo三个关键字，这样每个页面可以设置不同的head
export default () =>
  <div>
    <Head>
      <title>duuliy is next</title>
      <meta name="keywords" content="duuliy" />
      <meta name="description" content="duuliy" />
    </Head>
  </div>