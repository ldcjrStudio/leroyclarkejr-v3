module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    fontFamily: {
      serif: ["Helvetica", "Arial", "sans-serif"],
      body: ["SourceSansPro", "Arial", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#ef2a33",
        secondary: "#090a3b",
        offBlack: "#151515",
        white: "#FCFEFC",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
