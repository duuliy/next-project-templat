import { createContext, useContext, useState, useCallback } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from './style.module.scss'
import Link from 'next/link'

const name = 'duuliy'
export const siteTitle = 'Next.js Sample Website'

const LayoutContext = createContext()

export const useLayout = () => useContext(LayoutContext)

export const Layout = ({ children, home }) => {
  const [isFooter, setIsFooter] = useState(true)

  return (
    <LayoutContext.Provider
      value={{
        isFooter: isFooter,
        setIsFooter: () => setIsFooter(pre=>!pre)
      }}
    >
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>duuliy ssr</title>
        <meta name="Keywords" Content="关键词1,关键词2,关键词3,关键词4" />
        <meta
          name="description"
          content="描述XXXXXX"
        />

        <script
          key="cookie-script"
          dangerouslySetInnerHTML={{
            __html: `function _getCookie(b){}`
          }}
        />
      </Head>
      <header>
        <Image
          priority
          src="/images/profile.jpg"
          className={styles.borderCircle}
          height={144}
          width={144}
          alt={name}
        />
      </header>
      <main>{children}</main>
      {isFooter && <footer className={styles.backToHome}>
        <Link href="/">
          <a>回到首页</a>
        </Link>
      </footer>}
    </LayoutContext.Provider>
  )
}