import React, { PureComponent, Fragment } from 'react';
import dynamic from 'next/dynamic'
import { Button } from 'antd';


// import UserList from "./UserList";
// import Head from "../components/common/HeadView/index";
import config from "../config/config";
import Link from 'next/link'
import Router from 'next/router'
import dva from 'dva';
import {
  SignOutAsync
} from '../services/api';
import WithDva from '../utils/store';

const UserList = dynamic(import('./UserList'),{
  ssr:false //禁止使用ssr
})  //懒加载

const app = dva();
class Home extends PureComponent {

  //类似nuxt的asyncData，以及原理都是一样
  //注意：getInitialProps将不能使用在子组件中。只能使用在pages页面中。
  //参数如下：
  //pathname - URL 的 path 部分
  //query - URL 的 query 部分，并被解析成对象
  //asPath - 显示在浏览器中的实际路径（包含查询部分），为String类型
  //req - HTTP 请求对象 (只有服务器端有)
  //res - HTTP 返回对象 (只有服务器端有)
  //jsonPageRes - 获取数据响应对象 (只有客户端有)
  //err - 渲染过程中的任何错误

  static async getInitialProps({ req }) {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
    return { userAgent }
  }

  routGo=(linkA)=>(linkB)=>(linkC)=>{
    Router.push(
      {
        pathname: linkA+linkB+linkC,
        query: { name: 'Zeit' },
         shallow: true  //  这样不会执行 getInitialProps
      })

      //Router.prefetch('/about')
  }

  render(){
    return (
      <div className='app'>
         {/* <Head/> */}
        <h1>首页</h1>
        <Button type='primary'>Hello world!</Button>
         {this.props.userAgent} <br/>
        <img style={{ width: 50 }} src={config.logoPath} alt=""/>
        <UserList />
        <Link href={{ pathname: '/UserList', query: { name: 'Zeit' }}} prefetch> 
          {/* prefetch 后台预加载页面，达到最佳性能 (生产环境才行)
            passHref 强制使 link和onclick都生效但是影响seo link里面加<a>就都可以
          */}
          <p style={{ color: 'blue',cursor:'pointer' }}>UserList</p>
        </Link>
        <button onClick={()=>{this.routGo('/')('organi')('zation')}}>去组织机构</button>
        <style jsx>{`
          h1 {
            color: red;
          }
        `}</style>
      </div>
    )
  }

  async componentDidMount(){
    // const res = await SignOutAsync()
    // await this.props.dispatch({ type: 'Home/QUERY' })
    await this.props.dispatch({type: 'Home/QUERY'});
    setTimeout(()=>{
      console.log(this.props.data)
    },1000)
    // setTimeout(()=>{
    //   console.log(this.props.data)
    // },500)
    // console.log(res)
  }
};

export default WithDva(({ Home }) => ({
  data: Home.admittanceBody
}))(Home);