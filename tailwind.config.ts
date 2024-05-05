import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          bg: "#f1f1f1",
          chatbubblebg: "#ffffff",
          text: "#acacac",
          timetext: "#acacac",
          artistbadgestart: "#fa6c8a",
          artistbadgeend: "#ffafbe",
          profilestart: "#ff79b6",
          profileend: "#ffa9cd",
        },
      },
    ],
  },
};
export default config;
