/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans:  ['Poppins', 'ui-sans-serif', 'system-ui'],
        serif: ['Raleway', 'ui-serif'],
      },
      colors: {
        accent:     '#8B0000',
        'nav-blue': '#0563bb',
        'bg-light': '#F5F5F0',
        'bg-muted': '#f2f3f5',
        'text-primary':   '#1a1a2e',
        'text-secondary': '#45505b',
        'text-muted':     '#6b7280',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      boxShadow: {
        'accent': '0 0 30px rgba(139,0,0,0.25)',
        'card':   '0 8px 30px rgba(0,0,0,0.10)',
      },
      animation: {
        'fade-up':    'fadeUp 0.6s ease-out both',
        'fade-in':    'fadeIn 0.5s ease-out both',
        'blob':       'blobFloat 12s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        blobFloat: {
          '0%, 100%': { transform: 'translate(0,0) scale(1)' },
          '33%':      { transform: 'translate(20px,-30px) scale(1.05)' },
          '66%':      { transform: 'translate(-15px,20px) scale(0.97)' },
        },
      },
    },
  },
  plugins: [],
}
