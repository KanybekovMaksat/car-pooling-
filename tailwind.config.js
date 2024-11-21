/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  important: '#root',
  theme: {
    extend: {
      screens: {
        'xs-max': { max: '320px' },
        'sm-max': { max: '480px' },
        'md-max': { max: '768px' },
        'lg-max': { max: '1024px' },
        'xl-max': { max: '1440px' },
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '10px',
          'xs-max': '10px',
          'sm-max': '20px',
          'md-max': '50px',
          'lg-max': '100px',
          'xl-max': '150px',
        },

        screens: {
          'xl-max': '1440px', // Specific width for xl-max screens
        },
      },
    },
    fontFamily: {
      serif: ['Roboto'],
      sans: ['Roboto'],
    },
    colors: {},
    backgroundImage: {},
  },
  plugins: [],
}
