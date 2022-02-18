module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html", "./pages/**/*.{ts,tsx,js,jsx}"],
  content: [],
  theme: {
    extend: {
      colors: {
        red: {
          DEFAULT: "#de2c32",
        },
        green: {
          DEFAULT: "#1cc56b",
        },
        gray: {
          DEFAULT: "#8D8D8D",
          light: "#f2f2f2",
        },
        transparent: "transparent",
        white: "#fff",
        black: "#000",
      },
    },
  },
  plugins: [],
};
