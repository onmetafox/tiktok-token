/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')
const screens = require('./src/screens')

module.exports = {
  darkMode: 'selector',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      height: {
        header: '70px',
        'header-lg': '103px',
        footer: '291px',
      },
      minHeight: {
        content: 'calc(100vh - 70px - 291px)',
        'content-lg': 'calc(100vh - 103px - 291px)',
      },
      colors: {
        gunthy: '#fcd535',
        primary: '#24F5EF',
        info: 'rgb(59 130 246)',
        error: 'rgb(248 113 113)',
        warning: 'rgb(250 204 21)',
        success: 'rgb(45 212 191)',
        dark: '#010101',
        light: '#ffffff',
        title: '#072635',
        subtitle: '#707070',
        subtitle2: '#b7bdc6',
        mainBg: '#121212',
        white6: '#FFFFFF99',
        tghover: '#C62948',
        pink: '#FE2C55'
      },
      fontSize: {
        '2xs': '12px',
        sx: '13px',
        sm: '14px',
        md: '15px',
        base: '16px',
        lg: '18px',
        xl: '28px',
        '2xl': '32px',
        '3xl': '38px',
        '4xl': '58px',
        max: '100px'
      },
      fontFamily: {
        inter: ['Inter'],
      },
      screens,
      boxShadow: {
        dialog: '7px 7px 250px 0px #00c2ff29',
      },
    },
  },
  plugins: [
    plugin(({ addBase, theme }) => {
      addBase({
        html: { color: theme('colors.light'), lineHeight: 1.25 },
        body: {
          backgroundColor: theme('colors.mainBg'),
          fontSize: theme('fontSize.base'),
          fontWeight: theme('fontWeight.normal'),
          fontFamily: 'jakarta',
          '-webkit-font-smoothing': 'antialiased',
          '-moz-osx-font-smoothing': 'grayscale',
          overflowX: 'hidden'
        },
        h1: {
          fontSize: '70px',
          fontWeight: theme('fontWeight.bold'),
        },
        h2: {
          fontSize: '60px',
          fontWeight: theme('fontWeight.bold'),
          textShadow: '0px 0px 10px #ffffff99',
        },
        h3: {
          fontSize: '50px',
          fontWeight: theme('fontWeight.bold'),
        },
        h4: {
          fontSize: '40px',
          fontWeight: theme('fontWeight.bold'),
        },
        h5: {
          fontSize: '30px',
          fontWeight: theme('fontWeight.bold'),
        },
        h6: {
          fontSize: theme('fontSize.xl'),
          fontWeight: theme('fontWeight.bold'),
        },
        nav: {
          fontSize: theme('fontSize.base'),
          fontWeight: theme('fontWeight.bold'),
        },
        '.ul-text': {
          fontSize: theme('fontSize.2xl'),
          fontWeight: theme('fontWeight.bold'),
        },
        span: {
          color: 'inherit',
          fontSize: 'inherit',
          fontWeight: 'inherit',
        },
      })
    }),
  ],
}
