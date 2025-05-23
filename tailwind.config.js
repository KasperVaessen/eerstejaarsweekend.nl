/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    // colors: {
    //   white: '#FBF8EF',
    //   black: '#000000',
    //   'secondary-light': '#F5ECD5',
    //   'secondary-dark': '#626F47',
    //   secondary: '#A4B465',
    //   primary: '#F0BB78',
    //   'primary-dark': '#D96600',
    // },
    colors: {
      white: '#FFFFFF',
      black: '#000000',
      'secondary-light': '#E7EBF1',
      'secondary-dark': '#1E274A',
      secondary: '#90B6CB',
      primary: '#EE7203',
      'primary-dark': '#D96600',
    },
    extend: {
        spacing: {
            '3xs': '0.25rem',
            '2xs': '0.5rem',
            xs: '0.75rem',
            sm: '1rem',
            md: '1.5rem',
            lg: '2rem',
            xl: '3rem',
            '2xl': '4rem',
            '3xl': '6rem',

        }
    },
  },
  plugins: [],
}