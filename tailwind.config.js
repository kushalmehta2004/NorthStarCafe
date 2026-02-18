module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#1A1A1A",
        foreground: "#F5F0E8",
        bills: "#00338D",
        amber: {
          DEFAULT: "#D4A017",
          bright: "#F5A623",
        },
        brick: "#8B2500",
        muted: "#A89F8C",
      },
      fontFamily: {
        headline: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["'Courier New'", "monospace"],
      },
    },
  },
  plugins: [],
};
