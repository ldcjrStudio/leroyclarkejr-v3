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
        primary: "#0066f5",
        secondary: "#0ae0eb",
        offBlack: "#151515",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
// const colors = require('tailwindcss/colors')

// module.exports = {
//   theme: {
//     colors: {
//       gray: colors.coolGray,
//       blue: colors.lightBlue,
//       red: colors.rose,
//       pink: colors.fuchsia,
//     },
//     fontFamily: {
//       sans: ['Graphik', 'sans-serif'],
//       serif: ['Merriweather', 'serif'],
//     },
//     extend: {
//       spacing: {
//         '128': '32rem',
//         '144': '36rem',
//       },
//       borderRadius: {
//         '4xl': '2rem',
//       }
//     }
//   },
//   variants: {
//     extend: {
//       borderColor: ['focus-visible'],
//       opacity: ['disabled'],
//     }
//   }
// }
