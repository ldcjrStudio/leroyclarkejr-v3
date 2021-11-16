module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    fontFamily: {
      serif: ["Planc", "Arial", "sans-serif"],
      body: ["Planc", "Arial", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#ef2a33",
        primaryDark: "#ae0d14",
        secondary: "#090a3b",
        offBlack: "#151515",
        white: "#FCFEFC",
        lightGrey: "#F7F7F7",
        bluetiful: "#0066F5",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
