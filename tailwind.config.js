const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  purge:{
    // enabled: true //生产模式
  },
  theme: {
    colors: {
      green: {
        1: '#16B979',
        2: '#419974',
      },
      red: {
        1: '#E74A5F',
        2: '#D84E61',
      },
    },
    extend: {},
  },
  plugins: [
    plugin(function ({ addUtilities, theme }) {
      const values = theme('spacing')
      addUtilities([
        Object.entries(values).map(([key, value]) => {
          // 增加padding/margin的rtl兼容语法
          return {
            [`.ps-${key}`]: {
              'padding-inline-start': value,
            },
            [`.pe-${key}`]: {
              'padding-inline-end': value,
            },
            [`.ms-${key}`]: {
              'margin-inline-start': value,
            },
            [`.me-${key}`]: {
              'margin-inline-end': value,
            },
          }
        }),
      ])
    })
  ],
}
