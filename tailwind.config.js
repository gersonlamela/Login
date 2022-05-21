module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {},
    fontFamily: {
      Poppins: [
        "Poppins",
        "system-ui",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        '"Noto Sans"',
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
    },
    colors: {
      blue: "#4D47C3",
      purpple: "#A7A3FF",
      dark: "#121212",
      light: "#ffffff",
      gray: "#B0B0B0",
    },
  },
  plugins: [],
};
