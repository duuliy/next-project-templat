import { useState, useEffect, memo, useMemo, useCallback } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import useTranslation from 'next-translate/useTranslation'
import utilStyles from '@/styles/utils.module.scss'
import { useLayout } from '@/components/context/layouts'
import { getData } from '@/stores/count/effects'
import { cloneDeep } from 'lodash'
import { useSelector, useDispatch } from 'react-redux'
import { Button } from 'antd'
console.log(878,Button)

const DynamicComponent = dynamic(() =>
  import('@/components/small-title').then((mod) => console.log(mod.SmallTitle))
)

// const TestMemo = memo(({ name }) => {
//   console.log('reconciler 渲染了', name)
//   return <div>
//     {name}
//   </div>
// })

export default function Home({ myName ='duuliy' }) {
  const [obj, setObj] = useState({ name:'memo测试'})
  const [count, setCount] = useState(0)
  const { t } = useTranslation("test")
  const { number, data } = useSelector(state => state.count)
  const dispatch = useDispatch()
  const { isFooter, setIsFooter } = useLayout()
  console.log(isFooter)

  const getCake = async () => {
    await dispatch(getData())
  }

  useEffect(()=>{
    getCake()
  },[])

  useEffect(() => {
    const _data = cloneDeep(data)
    console.log(_data)
  }, [data])

  useEffect(()=>{
    console.log('script注入方法:', window._getCookie)
    if (count===6){
      setObj({ name: 'memo改变了' })
    }
  }, [count])

  const TestMemo = ({ name }) => {
    console.log('reconciler 渲染了', name)
    return <div>
      {name}
    </div>
  }

  const TestMemoW = useMemo(() => <TestMemo name={obj.name} />, [obj])

  const ggf = <div>
    变量测试
  </div>

  return (
    <section className={utilStyles.headingMd}>
      <DynamicComponent />
      {t('test_welcome')}
      {myName} 
      <br />
      {count}
      <br />
      <Link href="/test">
        <a>SSR测试</a>
      </Link>
      <br />
      <Link href="/csr-render">
        <a>客户端渲染测试</a>
      </Link>
      <br />
      <Link href={`/posts/ssg1`}>
        <a>SSG动态路由1</a>
      </Link>
      <br />
      <Link href={`/posts/ssg2`}>
        <a>SSG动态路由2</a>
      </Link>

      {TestMemoW}

      {ggf}
      <button onClick={()=>setCount(pre => ++pre)}>
        增加count
      </button>

      <button onClick={setIsFooter}>
        是否footer
      </button>

      <p>{number}</p>
      <Button type="primary" onClick={() => dispatch({ type: 'count/add' })}>+</Button> {' '}
      <Button type="primary" onClick={() => dispatch({ type: 'count/reduce' })}>-</Button>

    </section>
  )
}
