/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#000",
        gray: {
          "100": "#2a2a2a",
          "200": "rgba(255, 255, 255, 0.13)",
          "300": "rgba(255, 255, 255, 0.75)",
          "400": "rgba(255, 255, 255, 0.25)",
        },
        darkslateblue: "#14447c",
        "shades-0": "#fff",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
        "clear-sans": "'Clear Sans'",
        epilogue: "Epilogue",
      },
      borderRadius: {
        "31xl": "50px",
      },
    },
    fontSize: {
      xs: "12px",
      "mini-1": "14.1px",
      base: "16px",
      sm: "14px",
      "17xl": "36px",
      "3xl": "22px",
      "10xl": "29px",
      "29xl": "48px",
      "19xl": "38px",
      xl: "20px",
      "4xl": "23px",
      lg: "18px",
      "31xl": "50px",
      "11xl": "30px",
      "21xl": "40px",
      "9xl": "28px",
      inherit: "inherit",
    },
    screens: {
      mq1575: {
        raw: "screen and (max-width: 1575px)",
      },
      mq1275: {
        raw: "screen and (max-width: 1275px)",
      },
      mq825: {
        raw: "screen and (max-width: 825px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};