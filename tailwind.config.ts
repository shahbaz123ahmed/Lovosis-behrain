import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#1683F3",
          navy: "#0B1F33",
          black: "#111827",
          lightBlue: "#F1F7FE",
          softGray: "#F7F9FC",
          borderGray: "#E4EAF1",
          text: "#536274",
          accent: "#32A9FF",
        }
      },
      borderRadius: {
        'brand-sm': '10px',
        'brand-md': '14px',
        'brand-lg': '18px',
      },
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
