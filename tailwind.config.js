/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black1: "#000",
        gray: {
          "100": "#787878",
          "200": "#2a2a2a",
          "300": "rgba(255, 255, 255, 0.13)",
          "400": "rgba(255, 255, 255, 0.75)",
          "500": "rgba(255, 255, 255, 0.25)",
        },
        darkslateblue: "#14447c",
        royalblue: "#2c71f6",
        dodgerblue: "#458aff",
        "shades-0": "#fff",
        red: "rgba(255, 0, 0, 0.01)",
        black: "#2d2d2d",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
        "clear-sans": "'Clear Sans'",
        "body-text": "Epilogue",
      },
      borderRadius: {
        "31xl": "50px",
        "21xl": "40px",
      },
    },
    fontSize: {
      xs: "12px",
      "mini-1": "14.1px",
      sm: "14px",
      base: "16px",
      "17xl": "36px",
      "3xl": "22px",
      "10xl": "29px",
      mid: "17px",
      xl: "20px",
      "81xl": "100px",
      "11xl": "30px",
      "31xl": "50px",
      "9xl": "28px",
      "4xl": "23px",
      "13xl": "32px",
      lg: "18px",
      "21xl": "40px",
      "29xl": "48px",
      "19xl": "38px",
      lgi: "19px",
      "7xl": "26px",
      inherit: "inherit",
    },
    screens: {
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
      lg: {
        max: "1200px",
      },
      mq850: {
        raw: "screen and (max-width: 850px)",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq675: {
        raw: "screen and (max-width: 675px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
