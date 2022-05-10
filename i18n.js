module.exports = {
  locales: [ //根据url改变而变化的值，又是约定式，fuck！！！
    "zh-CN",
    "en-US"
  ],
  defaultLocale: "zh-CN",
  pages: {
    "*": [
      "common"
    ],
    "/": [
      "test"
    ],
    "/test": ["test"]
  },
  // loadLocaleFrom: (lang, ns) => import(`./public/locales/${lang}/${ns}.json`).then((m) => {
  //   console.log(m)
  //   return m.default
  // }),
  localeInfo: {
    'zh-CN': {
      label: '简体中文',
      lang: 'zh_CN'
    },
    'en-US': {
      label: '英文',
      lang: 'en-US'
    }
  }
}
