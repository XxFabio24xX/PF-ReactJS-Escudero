/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      red: colors.red,
      orange: colors.orange,
      Verdecito: "#3D737F",
      Baige: "#CEC7BF",
      Negro: "#000000",
      White: "#ffffff",
      gray: "#374151",
      Mogo: "#07161B",
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

