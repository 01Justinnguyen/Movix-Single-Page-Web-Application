/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#04152d',
        orange: '#ffa500',
        green: '#008000',
        pink: '#da2f68',
        red: '#ff0000'
      },

      keyframes: {
        searchDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' }
        }
      },

      animation: {
        searchDown: 'searchDown 0.3s ease-in-out'
      }
    }
  },
  plugins: []
}
