module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      borderRadius: {
        "5px": "5px",
      },
      colors: {
        "green-primary": "#4CAF50",
        "green-secondary": "#81C784",
        "green-dark": "#388E3C",
        "grass-green": "#32CD32",
        cream: "#FFFDD0",
        black: "#000000",
        "green-light": "#A5D6A7",
        "royal-black": "#0D0D0D",
        soil: "#8B4513",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
