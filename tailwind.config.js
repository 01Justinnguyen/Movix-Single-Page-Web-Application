/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#04152d',
        secondary: '#173d77',
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
      },

      backgroundImage: {
        'hero-pattern': 'linear-gradient(98.37deg, #f89e00 0.99%, #da2f68 100%)'
      },

      transitionProperty: {
        switchTab: 'left cubic-bezier(0.88, -0.35, 0.565, 1.35) 0.4s'
      },

      transitionDuration: {
        600: '600ms'
      }
    }
  },
  plugins: []
}
