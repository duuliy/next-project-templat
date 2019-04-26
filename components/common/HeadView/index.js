import Head from 'next/head'
import { Button } from 'antd';

//为了seo三个关键字，这样每个页面可以设置不同的head
export default () =>
  <div>
    <Head>
      <title>duuliy is next</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
      <meta charSet="UTF-8" content="text/html"/>
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <meta name="renderer" content="webkit" />
      <meta name="keywords" content="duuliy" />
      <meta name="description" content="duuliy" />
      <link rel='stylesheet' href='https://cdn.bootcss.com/antd/3.1.3/antd.css'/>
    </Head>

    <Button type='primary'>Hello world!</Button>
  </div>