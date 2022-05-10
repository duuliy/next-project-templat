import Head from 'next/head'
import { useRouter } from 'next/router'

export default function Post({ id=888 }) {
  const router = useRouter()
  console.log(router.locale)

  return <>
    <Head>
      <title>动态路由页面</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    这是{id}页面,{router.locale}语言
  </>
}
// 仅在服务器端运行
export async function getStaticPaths({ locales, defaultLocale}) {
  console.log(locales, defaultLocale)

  const paths = [{ params: { id: 'ssg1' } }, { params: { id: 'ssg2' } }]
  return {
    paths,
    // paths:[], //可以直接用[] url传任何指
    fallback: 'blocking'
  }
}
// 仅在服务器端运行,构建时生成,SSG
export async function getStaticProps({ params, locale }) {

  return {
    props: {
      id: params.id||'ssg1'
    },
    revalidate: 10000 //增量静态渲染
  }
}