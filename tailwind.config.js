module.exports = {
  daisyui: {
    themes: [
      'winter',
      {
        myDarkTheme: {
          primary: '#3ABFF8',
          secondary: '#828DF8',
          accent: '#F471B5',
          neutral: '#1D283A',
          'base-100': '#0F1729',
          info: '#0CA6E9',
          success: '#2BD4BD',
          warning: '#F4C152',
          error: '#FB6F84'
        }
      }
    ]
  },
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  plugins: [require('daisyui')]
};
