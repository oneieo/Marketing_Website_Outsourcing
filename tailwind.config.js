/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'batang': ['KoPubWorld Batang', 'serif'],
        'pretendard': ['Pretendard', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
