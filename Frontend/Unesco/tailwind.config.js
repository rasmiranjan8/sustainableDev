module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'], // Updated from purge to content
  theme: {
    extend: {
      colors: {
        'green-primary': '#4CAF50',
        'green-secondary': '#81C784',
        'green-dark': '#388E3C',
        'green-light': '#A5D6A7',
      },
      backgroundImage: {
        'nature': "url('/src/assets/background.jpg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
