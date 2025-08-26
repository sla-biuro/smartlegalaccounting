/** @type {import('tailwindcss').Config} */
function withOpacity(variable) {
  return ({ opacityValue }) => {
    if (opacityValue === undefined) return `rgb(var(${variable}))`
    return `rgb(var(${variable}) / ${opacityValue})`
  }
}

module.exports = {
  darkMode: 'class',
  content: [
    './app.vue',
    './app/**/*.{vue,js,ts,tsx}',
    './components/**/*.{vue,js,ts}',
    './pages/**/*.{vue,js,ts}',
    './layouts/**/*.{vue,js,ts}'
  ],
  theme: {
    extend: {
      colors: {
        primary: withOpacity('--color-primary-rgb'),
        secondary: withOpacity('--color-secondary-rgb'),
        accent: withOpacity('--color-accent-rgb'),
        neutral: withOpacity('--color-neutral-rgb'),
        surface: withOpacity('--color-surface-rgb'),
        muted: withOpacity('--color-muted-rgb'),
        success: withOpacity('--color-success-rgb'),
        warning: withOpacity('--color-warning-rgb'),
        danger: withOpacity('--color-danger-rgb'),
        info: withOpacity('--color-info-rgb'),
      }
    },
  },
  plugins: [],
}
