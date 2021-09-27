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
        greeny:{
          DEFAULT: '#53B51A',
        },
        webinar:{
          DEFAULT: '#D1D2D3',
        },
        workflow:{
          DEFAULT: '#0052D0',
        },
        agile:{
          DEFAULT: '#3F135E',
        },
        purp:{
          DEFAULT: '#3F135E',
        },
      },
      fontSize: {
        'tiny': '0.5rem',
      },
      minHeight: {
        '0': '0',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        'afters': '296px',
        'full': '100%',
       },
       width: {
        '10%': '10%',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
