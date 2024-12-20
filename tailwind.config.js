/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        'white': '#FFFDFA',
        'dark_space_blue': "#00001A",
        'gunmetal': '#5E607A',
        'light_vermillion': '#F15D51',
        'silver': '#C5C6CE',
        'yellow': '#E9AA52',
        'red' : 'hsl(5, 85%, 63%)',
        'orange' : 'hsl(35, 77%, 62%)'
      },
      screens: {
        'mb': {  min: '0px', max: '520px' },
        'tb': { min: '521px', max: '768px' },
        'lp': { min: '769px', max: '1024px' },
      },
    },
  },
  plugins: [],
}

