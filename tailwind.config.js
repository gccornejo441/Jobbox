const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'salmon': "#ffeed6",
        'white': '#fff'
      }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      gray: colors.trueGray,
      red: colors.red,
      blue: colors.lightBlue,
      yellow: colors.amber,
      violet: colors.violet,
      cyan: colors.cyan,
      lime: colors.lime,
      green: colors.green,
      emerald: colors.emerald,
      teal: colors.teal,
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}