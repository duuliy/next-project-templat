// const {
//   NODE_ENV,
//   CLIENT_SIDE_API_DEV,
//   CLIENT_SIDE_API_PRO,
//   ASSET_PREFIX 
// } = process.env
const path = require('path');
const nextTranslate = require('next-translate')
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')
const { locales, defaultLocale } = require("./i18n.js");

/** @type {import('next').NextConfig} */
const nextConfig = {
  // assetPrefix: ASSET_PREFIX,  //静态CDN资源前缀名，https://cdn.mydomain.com/_next/static/chunks/4b9b41aaa062cbbfeff4add70f256968c51ece5d.4d708494b3aed70c04f0.js
  // async rewrites() {  //proxy 代理重写, 线上
  //   return {
  //     beforeFiles: [  //重写被检查/应用
  //       {
  //         source: '/some-page',
  //         destination: '/somewhere-else',
  //         //basePath: false, //false或undefined - 如果为 false，则匹配时不包含 basePath，只能用于外部重写。
  //         //locale: false,  //false或undefined - 匹配时是否不应该包含语言环境
  //         has: [  //满足query, cookie, header等的键值队 才会匹配
  //           { type: 'query', key: 'overrideMe', value: 'home' },
  //           { type: 'cookie', key: 'authorized', value: 'true' }
  //         ],
  //       },
  //     ],
  //     afterFiles: [  //检查/应用重写，如果匹配其中一个重写，我们会在每次匹配后检查动态路由/静态文件
  //       {
  //         source: '/non-existent',
  //         destination: '/somewhere-else',
  //       },
  //     ],
  //     fallback: [   //在渲染 404 页面之前和在检查动态路由/所有静态资产之后应用
  //       {
  //         source: '/:path*',  //通配符，正则等均可设置
  //         destination: `https://my-old-site.com/:path*`,
  //       },
  //     ],
  //   }
  // },
  // async redirects() {  //路由重定向配置
  //   return [
  //     {
  //       source: '/about',
  //       destination: '/',
  //       permanent: true,  //true将返回永久缓存重定向308，false将返回临时且未缓存307
  //       basePath: false,  //false或undefined - 如果为 false，则匹配时不包含 basePath，只能用于外部重写。
  //       locale: false,  //false或undefined - 匹配时是否不应该包含语言环境
  //       has: [  //满足query, cookie, header等的键值队 才会匹配
  //           { type: 'query', key: 'overrideMe', value: 'home' },
  //           { type: 'cookie', key: 'authorized', value: 'true' }
  //         ],
  //     },
  //   ]
  // },
  // async headers() {  //自定义表头
  //   return [
  //     {
  //       source: '/with-locale', // automatically handles all locales
  //       locale: false,
  //       basePath: false,
  //       headers: [
  //         {
  //           key: 'x-hello',
  //           value: 'world',
  //         },
  //       ],
  //     },
  //   ]
  // },
  // images: { //全局图片安全域
  //   domains: NODE_ENV ? CLIENT_SIDE_API_DEV : CLIENT_SIDE_API_PRO
  // },
  // compiler:{
  //   removeConsole:true,  //指定生产模式为true，删除所有console
  // },
  i18n: {  //用于路由国际化
    locales,
    defaultLocale,
    // localeDetection: false, //不用浏览器自动检测
  },
  experimental: {
    outputStandalone: true, //根据import,require,fs静态分析，跟踪所有文件，确定部署生产版本需要的文件（等于tree sharking掉不要的文件，提高部署性能）
    // outputFileTracingRoot: path.join(__dirname, '../../'),  //指定目录
  },
  swcMinify: true,  //SWC 替换 Terser  压缩js速度提高7倍
  env: {  //  环境变量，包了一层new webpack.DefinePlugin(),process.env.customKey 但是不能解构
    customKey: 'my-value',
  },
  pageExtensions: ['mdx', 'md', 'jsx', 'js', 'tsx', 'ts'], //自定义页面扩展
  compress: false, //如果在nginx服务器上开启了压缩，就禁用node的压缩，减轻node的负载压力。
  // basePath: '/docs', //会使Link和Image 标签的加载路径自动加上前缀
  poweredByHeader: false,  //用于告知网站是用何种语言或框架编写的，false禁用
  // distDir: 'dist', //指定用于自定义构建目录的名称
  reactStrictMode: false, //react严格开发模式
  generateBuildId: async () => {//同一台服务器部署多个项目，可以用id隔离开
    return 'my-build-id'
  },
  devIndicators: {
    buildActivityPosition: 'bottom-right',  //编译提示器的位置或者false禁用
  },
  eslint: {
    ignoreDuringBuilds: true, //在构建的时候禁用eslint
  },
  // typescript: {
  //   ignoreBuildErrors: true,  //在构建的时候禁用ts检查
  // },
  // onDemandEntries: {  //鸡肋，直接用强缓存和协商缓存不香吗
  //   maxInactiveAge: 25 * 1000,  //页面缓存时间段
  //   pagesBufferLength: 2,  //页面保留的个数
  // },
  // trailingSlash: true, //禁用  “/about/”  将重定向到 “/about”

  // httpAgentOptions: {  //禁用 http长连接
  //   keepAlive: false,
  // },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // buildId: String - 构建 id，用作构建之间的唯一标识符
    // dev: Boolean - 表示编译是否将在开发中完成
    // isServer: Boolean - true用于服务器端编译和false客户端编译
    // defaultLoaders: Object - Next.js 内部使用的默认加载器：
    // config.module.rules.push({
    //   test: /\.mdx/,
    //   use: [
    //     options.defaultLoaders.babel,
    //     {
    //       loader: '@mdx-js/loader',
    //       options: pluginOptions.options,
    //     },
    //   ],
    // })
    config.resolve.alias['@'] = path.resolve(__dirname);
    config.resolve.alias['@utils'] = path.resolve(__dirname, './lib/utils');
    config.resolve.alias['@api'] = path.resolve(__dirname, './lib/api');
    config.plugins.push(
      new LodashModuleReplacementPlugin(),
      new webpack.ProvidePlugin({
        moment: 'moment',
      }),
      new webpack.LoaderOptionsPlugin({
        minimize: true,
        options: {
          runtimeChunk: {
            name: "runtime"
          }
        }
      })
    )
    //代码切割，避免重复
    config.optimization = {
      ...config.optimization,
      concatenateModules: true,
      splitChunks: {
        chunks: "all",
        maxInitialRequests: Infinity,
        minSize: 0,
        cacheGroups: {
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendors"
          },
          commons: {
            name: "commons",
            minChunks: 2,
            chunks: "initial"
          },
          styles: {
            name: "styles",
            test: /\.css$/,
            chunks: "all",
            minChunks: 2,
            enforce: true
          }
        }
      },
    }

    //source-map 可以用它自带的。
    //图片的hash建议用babelc，重新配置图片的打包方式，来达到contenthash，而不用每次去改图片名字
    //treesharking 也用babelc 和packagke 来强化
    return config
  },
  //以下2条感觉很鸡肋
  // serverRuntimeConfig: { //仅服务器运行时配置
  //   mySecret: 'secret',
  //   secondSecret: process.env.SECOND_SECRET,
  // },
  // publicRuntimeConfig: {  //客户端和服务器端代码均可访问的任何内容
  //   staticFolder: '/static',
  // },
  // import getConfig from 'next/config'
  // const { serverRuntimeConfig, publicRuntimeConfig } = getConfig()
}

module.exports = nextTranslate(nextConfig)


//控制scss范围
// const path = require('path')

// module.exports = {
//   sassOptions: {
//     includePaths: [path.join(__dirname, 'styles')],
//   },
// }
