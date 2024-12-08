/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./ui/components/**/*.{js,ts,jsx,tsx}",
    "./features/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        priority: {
          p0: "#F87171",
          p1: "#FACC15",
          p2: "#60A5FA",
        },
      },
    },
  },
  plugins: [],
};
