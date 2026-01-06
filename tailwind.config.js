/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'rusty-spice': '#aa5731',
        'mint-cream': '#eaf0e8',
        'golden-sand': '#d7c171',
        'fern': '#417c38',
        'jungle-teal': '#478779',
        'porcelain': '#f3f6f0',
      },
      fontFamily: {
        // Gunakan font monospace biar tetep ada vibe IT-nya dikit tapi soft
        mono: ['"Courier New"', 'Courier', 'monospace'], 
      }
    },
  },
  plugins: [],
}