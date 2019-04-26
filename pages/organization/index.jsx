import React, { PureComponent, Fragment } from 'react';
import { withRouter } from 'next/router'
import Router from 'next/router'
import Head from "../../components/common/HeadView/index";

class organization extends PureComponent{
 state={

 }

 render(){
   console.log(this.props.url);
   return(
    <Fragment>
      {/* 每个页面的seo三要素可以不一样 */}
      <Head/>   
      <div>这是组织机构!</div>
    </Fragment>
   )
 }

 componentDidMount(){
  Router.beforePopState(({ url, as, options }) => {
    console.log(url)
    console.log(as)
    console.log(options)
  
    return true  //if false is err
  });
}
}

export default withRouter(organization)