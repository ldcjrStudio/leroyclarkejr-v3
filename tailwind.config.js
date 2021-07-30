module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
    //   fontFamily: {
    //   sans: ['Inter var', ...defaultTheme.fontFamily.sans],
    // },
  },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
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