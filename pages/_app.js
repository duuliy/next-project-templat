import { Provider } from 'react-redux'
import stores from '@/stores'
import { Layout } from '@/components/context/layouts'
import '@/styles/globals.css'
import 'antd/dist/antd.css'

function MyApp({ Component, pageProps }) {
  return <Provider store={stores}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </Provider>
}

export default MyApp
