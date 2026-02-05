/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#fffaf4",
        "background-light": "#f8f7f5",
        "background-dark": "#192b43",
        "accent-line": "#D9DEED",
        "skill-border": "#D9DEED",
        "lime-brand": "#c0ff33",
        "muted-blue": "#64748b",
        "surface-dark": "#0f172a",
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        silkscreen: ["'Silkscreen'", "cursive"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: "#cbd5e1",
            h1: { color: "#fffaf4" },
            h2: { color: "#fffaf4" },
            h3: { color: "#fffaf4" },
            strong: { color: "#fffaf4" },
            code: { color: "#fffaf4" },
            a: { color: "#fffaf4" },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
