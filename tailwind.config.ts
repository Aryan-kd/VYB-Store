import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: "#4a508e",
      secondary: "#e5f0f1",
      tertiary: "#00dc82",
      "primary-text": "#000000",
      "secondary-text": "#838383",
      "tertiary-text": "#ffffff",
      info: "#00b2ff",
      success: "#67ca16",
      warning: "#ffa600",
      danger: "#c21d00",
      glass: "#d6d6d666",
      transparent: "#FFFFFF",
      "dark-green": "#003C3C",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
