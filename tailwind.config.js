/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.tsx',      
  ],
  theme: {    
    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
     '2xl': 32,
     '4xl': 64,
    },
    colors: {
      white: '#ffffff',
      gray: '#F4EFFA',
      yelow: '#FFFF00',
      gost: '#F8F8FF',
      orange: '#FFA500',
      red: 'red',
      green:{
        300: '#bef264',
        400: '#633BBC',
        500: '#228b22',
      },
      black:{
        500: '#202024',
        700: '#09090A'
      },
      cyan: {
        900: '#2e3668',
        700: '#435b94',
        600: '#5980C1',
        300: '#ADD8E6',
      },
      purple:{
        600: '#935FD3',
        700: '#633BBC',
        900: '#271A45'
      }    
    },
  extend: {
    fontFamily: {
      sans : 'Inter, sans-serif' 
    },
  },
  plugins: [],
}
}

