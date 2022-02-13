module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [
    '@/**/*.html',
    '@/**/*.vue',
  ],
  theme: {
    extend: {
      
      colors: {
        sky: {
          100:"rgb(224 242 254)",
        }
      },
    },
  },
  variants: {},
  plugins: [],
};