import type { Config } from "tailwindcss";

const config: Config = {
  content: [
  "./src/**/*.{js,ts,jsx,tsx,mdx}",
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'], // Body text
        serif: ['var(--font-playfair)', 'serif'],
      },
      colors: {
        'ann-green': '#BFE3DB',      // Xanh ngọc
        'ann-gold': '#E5C987',       // Vàng ánh nhẹ
        'ann-ivory': '#F8F7F2',      // Trắng ngà
        'ann-stone': '#8D8375',      // Nâu đá tự nhiên
        'ann-dark': '#444343',       // Đen xám nhẹ
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
  ],
};

export default config;