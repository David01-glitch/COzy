/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#FBF7F0',
        beige: '#E9DDC9',
        sand: '#D9C5A3',
        sage: '#8FA68A',
        sageDark: '#6B8268',
        brown: '#8A6A4B',
        brownDark: '#5C4632',
        muted: '#C97B4E',
        ink: '#3B2E22',
      },
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        cozy: '0 6px 20px -8px rgba(92, 70, 50, 0.25)',
      },
    },
  },
  plugins: [],
}
