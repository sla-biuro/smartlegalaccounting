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
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
    "./app/**/*.vue"
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
