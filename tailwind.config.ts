import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        deepBlue: "#0033A0",
        skyBlue: "#87CEEB",
        lightBlue: "#ADD8E6",
        white: "#FFFFFF",
        darkGray: "#333333",
        mediumGray: "#F5F5F5",
        primaryBlack: {
          800: "#131B24",
          900: "#06090C",
        },
      },
    },
  },
  plugins: [],
};
export default config;
