import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ["Manrope", "sans-serif"],
        heading: ["Manrope", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
