/** @type {import('tailwindcss').Config} */

// Tokens are defined as channel triplets in app/globals.css so that opacity
// modifiers (bg-signal/20, border-bone/12) keep working.
const token = (name) => `rgb(var(--c-${name}) / <alpha-value>)`

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: token('ink'),
        'ink-2': token('ink-2'),
        slate: token('slate'),
        bone: token('bone'),
        muted: token('muted'),
        signal: token('signal'),
        sky: token('sky'),
        ember: token('ember'),
        'rail-cold': token('rail-cold'),
        'rail-warm': token('rail-warm'),
      },
      fontFamily: {
        display: ['var(--font-display)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        stage: '87.5rem',
      },
      boxShadow: {
        lift: 'var(--shadow-lift)',
        signal: 'var(--shadow-signal)',
      },
      backgroundImage: {
        merge: 'var(--gradient-merge)',
      },
    },
  },
  plugins: [],
}
