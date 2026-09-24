import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0b0c0d",
        surface: "#151619",
        "surface-2": "#1d1f23",
        "surface-3": "#26282d",
        hairline: "#2c2e33",
        accent: "#ccff00",
        "accent-dim": "#a8d400",
        bone: "#f3f4ee",
        mute: "#9a9ca3",
      },
      fontFamily: {
        display: ["var(--font-oswald)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      borderRadius: {
        card: "10px",
      },
      maxWidth: {
        shell: "1320px",
      },
    },
  },
  plugins: [],
};

export default config;
