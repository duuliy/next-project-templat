// next.config.js
const withLess = require('@zeit/next-less')
const withTypescript = require('@zeit/next-typescript')
const isProd = process.env.NODE_ENV === 'production'

module.exports = withTypescript(withLess({
// generateEtags: false  //禁止etag
  distDir: 'build',
  pageExtensions: ['jsx', 'js', 'ts']
//   webpack(config, options) {
//     config.module.rules.push({
//         test: /\.(png|svg|eot|otf|ttf|woff|woff2)$/,
//         use: {
//           loader: 'url-loader',
//           options: {
//             limit: 100000,
//             publicPath: resUrl ? resUrl + '_next/static/' : '/_next/static/',
//             outputPath: 'static/',
//             name: '[name].[ext]'
//           }
//         }
//     })
//     return config;
// },
// generateBuildId: async () => {
//     // For example get the latest git commit hash here
//     return 'my-build-id'
//   },
//Next.js 使用构建时生成的常量来标识你的应用服务是哪个版本。在每台服务器上运行构建命令时，可能会导致多服务器部署出现问题。为了保持同一个构建 ID，可以配置generateBuildId函数
// serverRuntimeConfig: { // 属性只在服务器端可用
//     mySecret: 'secret'
//   },
//   publicRuntimeConfig: { 属性在服务端和客户端可用。
//     staticFolder: '/static',
//     mySecret: process.env.MY_SECRET // Pass through env variables
//   },
//assetPrefix: isProd ? 'https://cdn.mydomain.com' : ''  //配置CDN
}))
    
    // withLess()


//useFileSystemPublicRoutes: false 禁止后台路由
