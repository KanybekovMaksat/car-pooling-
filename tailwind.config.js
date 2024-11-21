/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
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
      },
    },
  },
  plugins: [],
}
