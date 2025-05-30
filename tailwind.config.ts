import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flyonui/dist/js/carousel.js",
    "./node_modules/flyonui/dist/js/dropdown.js",
    "./node_modules/flyonui/dist/js/navbar.js",
  ],
  theme: {
    extend: {
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-250px * 7))' },
        },
      },
      animation: {
        scroll: 'scroll 40s linear infinite',
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-light": "linear-gradient(to bottom, #C2EFFF, #FFFFFF)",
        gradient: "linear-gradient(to right, #051926 50%,#DCF6FF 50%)",
        'support-gradient': 'linear-gradient(to right, #D6F5FF, #FFFFFF)',
      },

      fontFamily: {
        myFont: ["DmSans-custom", "sans-serif"],
      },

      colors: {
        lightBlueColor: "#B0E5F8",
        lighBlue: "#DFF7FF",
        lightGradient: "#C2EFFF",
        whiteGradient: "#FFFFFF",
        skyBlueColor: "#C9F1FF",
        lightSkyBlue: "#DAF3FE",
        lightColor: "#DCF6FF",
        lightBlueColorOpcional: "#ECFAFF",
        lightColorOpcional: "#E5F8FF",
        lighBlueColorSimulador: "#44879F",
        darkBlueColorOpcional: "##091925",
        lightTextNavBar: "#97E3FF",
        blueDarkColor: "#051926",
        blueColorButton: "#1A3A5A",
        lighBlueColorOpcional: "#F0FBFF",
        blueColorBackground: "#1A3A5A",
        darkBlueColor: "#0D3A5C",
        grayColorOpcional: "#FAFAFA",
        grayColorLine: " #D9D9D9",
        grayColorBackground: "#B8B8B8",
        grayColor: "#F4F4F4",
        grayButtonColor: "#E8E8E8",
        grayColorText: "#B8B8B8",
        graySecondaryColor: "#140F0F",
        lilaColor: "#D2B7FF",
        lightSecondaryColor: "##F0FBFF",
        backgroundLightColor: "#E7F9FF",
        whiteColor: "#F7FAFB",
        blackColorText: "#020202",
        mustardColor: "#FDEFDF",
        greenColor: "#04A260",
        simulatorRecived: "#F0E4FF",
        simulatorText: "#0D3A5C",
        sumulatorContainer: "#DFF7FF",
        toStoresContainer: "#E7F9FF",
        buttonSuscribe: "#A2E6FA",
        titleTransparency: "#0B3257",
        textSupport: "#051926",
        bgOperations: "#D5F4FF",
        bgOperationsContianer: "#C1ECFB",
        purplePrincipal: "#1a69ff",
        purpleSecondary: "#1814B2",
        whitePrimary: "#F9FBFC",
        whiteSecondary: "#EFEFEF",
        purpleTercero: "#17165E",
        grayBlack: "#292929"
      },

      screens: {
        xs: "375px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        xxl: "1536px",
        xxxl: "1920px"
      },
    },
  },
  plugins: [
    require("flowbite/plugin"),
    require("flyonui"),
    require("flyonui/plugin")
  ],
};
export default config;
