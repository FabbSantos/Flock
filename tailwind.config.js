module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        purple: {
          DEFAULT: '#7B1F5E',
        },
        lblue: {
          DEFAULT: '#794B99',
        },
        dblue: {
          DEFAULT: '#2B1251',
        },
        fb:{
          DEFAULT: '#3B5998',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
