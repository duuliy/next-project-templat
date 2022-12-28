

## 这是next.js+模块联邦的解决方案example

next+qiankun两者单独拿出来都很重了，仅仅是为了共享组建，使用两者合并，并不合适。
next+模块联邦来解决问题吧

cd fe1
yarn
yarn dev

cd fe2
yarn
yarn dev

cd fe3
yarn
yarn dev

## 注意

1.next的ssr不支持模块联邦的ssr ，目前只有 @module-federation/nextjs-mf  付费支持ssr
2.document.js这里必须再次利用localhost+指定端口引入（component_Header_jsx，src_utils_getSquareRoot_js），否则会在本端口（3002）去寻找以下文件而报错404
3.next.js 不同于react和vue 能很好的搭配webpack5模块联邦, 请注意他的特殊性

