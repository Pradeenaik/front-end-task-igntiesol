module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Add paths to all of your template files
  ],
  theme: {
    extend: {
      fontFamily: {
        PoppinsRegular: ["PoppinsRegular"],
        PoppinsMedium: ["PoppinsMedium"],
        PoppinsSemibold: ["PoppinsSemibold"],
        bebas_nune: ["var(--font-bebas_nune)"],
        roboto: ["var(--font-roboto)"],
        poppins: ["var(--font-poppins)"],
        BebasNune: ["BebasNune"],
        PoppinsBold: ["PoppinsBold"],
        PoppinsBoldItalic: ["PoppinsBoldItalic"],
      },
    },
  },
  plugins: [],
}

