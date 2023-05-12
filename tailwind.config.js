/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#696969',
        secondary: '#004BFF',
        black: '#000000',
        white: '#FFFFFF',
        red: '#EA5462',
        green: '#00CDA8',
        grey: '#EEEEEE'
      },
      boxShadow: {
        card: '0px 3px 6px #00000029'
      }
    }
  },
  plugins: []
}
