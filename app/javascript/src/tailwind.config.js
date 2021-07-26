const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')
module.exports = {
  darkMode: 'media',
  theme: {
    fontSize:{
      'xxs':'0.45rem',
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',    },
    extend: {
      fontFamily: {
        sans: ['Nunito', ...defaultTheme.fontFamily.sans],
      },
      borderRadius: {
        'none': '0',
        'sm': '0.125rem',
        DEFAULT: '0.25rem',
        DEFAULT: '4px',
        'md': '0.375rem',
        'lg': '0.5rem',
        'full': '9999px',
        'large': '12px',
        'large-20': '20px',
      },
      colors: {
        'cool-gray': colors.coolGray,
        'light-blue': colors.lightBlue,
        teal: colors.teal,
        sy: {
          '100': '#1BEAE4',
          '200': '#7CFCF4',
          '300': '#424C5A',
          '400': '#566273',
          '500': '#565656',
          '600': '#048780'
        },
        cheep: {
          '100': '#3490dc',
          '200': '#ffed4a'
        },
        symplifica:{
          light: '#1beae4',
          dark: '#00838C',
          red: '#FD5C5C',
          hoverred:"#dc3545",
          hovergray:'#e2e6ea',
          extralight:'#ACFCF4',
          green:'#048780',
          homered:'#ff4d4d'        },        success:{
          "100": '#13B954'
        },
        facebook: {
          '100': '#1877f2',
        },
        google: {
          '100': '#ea4335',
        },
        apple: {
          '100': '#a6b1b7',
        },
        rocket: {
          '100': '#EBF8FF',
          '200': '#BEE3F8',
          '300': '#90CDF4',
          '400': '#63B3ED',
          '500': '#4299E1',
          '600': '#3182CE',
          '700': '#2B6CB0',
          '800': '#2C5282',
          '900': '#2A4365',
        },
        "light-blue": colors.lightBlue,
      },      /*sombras*/
      boxShadow: {
        sm: '0 1px 2px 0 rgba(64, 72, 71, 0.05)',
        DEFAULT: '0 1px 3px 0 rgba(64, 72, 71,  0.1), 0 1px 2px 0 rgba(64, 72, 71, 0.06)',
        md: '0 4px 6px -1px rgba(64, 72, 71, 0.1), 0 2px 4px -1px rgba(64, 72, 71, 0.06)',
        lg: '0 10px 15px -3px rgba(64, 72, 71, 0.1), 0 4px 6px -2px rgba(64, 72, 71, 0.05)',
        xl: '0 20px 25px -5px rgba(64, 72, 71, 0.1), 0 10px 10px -5px rgba(64, 72, 71, 0.04)',
        '2xl': '0 25px 50px -12px rgba(64, 72, 71, 0.25)',
       '3xl': '0 35px 60px -15px rgba(64, 72, 71, 0.3)',
        inner: 'inset 0 2px 4px 0 rgba(64, 72, 71, 0.06)',
        none: 'none',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ]
}