import fetch from '../utils/fetch';


//正式接口开始

//退出登录
const SignOutAsync=()=> fetch('get','https://api.github.com/repos/zeit/next.js')

export{
    SignOutAsync
}