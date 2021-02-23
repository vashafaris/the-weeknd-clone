module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['helvetica neue', 'sans-serif'],
    },
    backgroundColor: (theme) => ({
      ...theme('colors'),
      background: '#F2F2F2',
    }),
    textColor: (theme) => ({
      ...theme('colors'),
      intro: '#303030',
    }),
    borderColor: (theme) => ({
      ...theme('colors'),
      DEFAULT: '#F2F2F2',
    }),
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
