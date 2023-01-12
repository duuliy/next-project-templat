import Head from 'next/head'
import utilStyles from '../styles/utils.module.scss'
import cls from 'classnames'

export default function Home({ type = 'success', allPostsData }) {
  return (
    <>
      <Head>
        <title>测试页面</title>
      </Head>

      <main>
        555
        {/* 加mock */}
        接口请求的数据是：{allPostsData.map(({ date, title }, i) => (
          <li key={i} className={utilStyles.testChange}>
            {title}
            <br />
            {date}
          </li>
        ))}
      </main>

      <footer className={cls({
        [utilStyles.success]: type === 'success',
        [utilStyles.error]: type === 'error'
      })}>
        666
      </footer>

    </>
  )
}

// 仅在服务器端运行,SSR
export function getServerSideProps(context) {
  console.log(context)

  const allPostsData = [
    {
      title: 666,
      date: 666,
    }
  ]

  return {
    props: {
      allPostsData
    }
  }
}


