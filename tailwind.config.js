/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./**/*.html",     // All HTML files in the root and subdirectories
    "./**/*.js",       // All JS files in the root and subdirectories
  ],
  theme: {
    extend: {
      keyframes: {
        blob: {
          '0%': {
            transform: 'translate(-50%, -50%) scale(1) rotate(0deg)',
            borderRadius: '42% 58% 55% 45% / 53% 40% 60% 47%',
          },
          '50%': {
            transform: 'translate(-50%, -50%) scale(1.05) rotate(180deg)',
            borderRadius: '58% 42% 45% 55% / 47% 60% 40% 53%',
          },
          '100%': {
            transform: 'translate(-50%, -50%) scale(1) rotate(360deg)',
            borderRadius: '42% 58% 55% 45% / 53% 40% 60% 47%',
          },
        },
      },
      animation: {
        blob: 'blob 20s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}


