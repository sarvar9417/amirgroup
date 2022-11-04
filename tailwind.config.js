const defaultTheme = require("tailwindcss/defaultTheme");
const { mono: defaultFontFamily } = defaultTheme.fontFamily;
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      gilroy: ["Gilroy, sans-serif", ...defaultFontFamily],
    },
    colors: {
      white: "#FFFFFF",
      black: "#000000",
      "black-text": "#262728",
      background: "#F3F5F8",
      grey: "#BBC2D0",
      red: "#EC3920",
      yellow: "#FFBD95",
      green: "#00C48C",
      blue: {
        900: "#3855B3",
        "for-admin": "#3D639D",
        100: "#5D5FEF",
        80: "#7879F1",
        60: "#A5A6F6",
        40: "#A2AEDB",
      },
      pink: {
        900: "#E83274",
        800: "#FF647C",
        700: "#FF6422",
        600: "#F39DBD",
        100: "#EF5DA8",
        80: "#F178B6",
        60: "#FCDDEC",
      },
    },
    fontSize: {
      xs: ["12px", { lineHeight: "14px" }],
      sm: ["14px", { lineHeight: "16px", letterSpacing: "-0.3px" }],
      md: ["16px", { lineHeight: "19px", letterSpacing: "-0.3px" }],
      lg: ["22px", { lineHeight: "26px" }],
    },
  },
  plugins: [],
};
