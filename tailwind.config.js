module.exports = {
  mode: 'jit',
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './features/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        primary: ['Arima Madurai', 'cursive'],
        roboto: ['Roboto', 'sans-serif'],
      },
      fontSize: {
        sm: '0.75rem', // 12px
        base: '1rem', // 16px
        lg: '1.25rem', // 20px
        xl: '1.75rem', // 28px
        '2xl': '2rem', // 32px
        '3xl': '2.5rem', // 40px
      },
      lineHeight: {
        sm: '0.75rem', // 12px
        base: '1rem', // 16px
        lg: '1.25rem', // 20px
        xl: '1.5rem', // 24px
        '2xl': '2rem', // 32px
        '3xl': '2.25rem', // 36px
        '4xl': '2.5rem', // 40px
      },
      borderRadius: {
        none: '0',
        DEFAULT: '10px',
        full: '9999px',
      },
      colors: {
        primary: {
          100: '#55FCF1',
          50: '#AAFDF8',
        },
        gray: {
          100: '#1F2833',
          80: '#2C3A4B',
          60: '#606A78',
          40: '#8A94A3',
          20: '#B7BFCB',
        },
        white: '#fff',
        transparent: 'transparent',
        current: 'currentColor',
      },
      maxWidth: {
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        120: '8.75rem',
        300: '18.75rem',
      },
      width: {
        fit: 'fit-content',
      },
      height: {
        fit: 'fit-content',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
