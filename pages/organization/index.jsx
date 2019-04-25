import React, { PureComponent, Fragment } from 'react';
import { withRouter } from 'next/router'
import Router from 'next/router'


class organization extends PureComponent{
 state={

 }

 render(){
   console.log(this.props.url.query.name);
   return(
    <Fragment>
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