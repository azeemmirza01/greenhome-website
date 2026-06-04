import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0d631b',
        'on-primary': '#ffffff',
        'primary-container': '#2e7d32',
        'on-primary-container': '#cbffc2',
        'primary-fixed': '#a3f69c',
        'on-primary-fixed': '#002204',
        'on-primary-fixed-variant': '#005312',
        secondary: '#525f71',
        'on-secondary': '#ffffff',
        'secondary-container': '#d3e1f6',
        'on-secondary-container': '#566475',
        tertiary: '#1d622b',
        'on-tertiary': '#ffffff',
        'tertiary-container': '#387b41',
        'on-tertiary-container': '#c7ffc5',
        surface: '#f8f9fa',
        'on-surface': '#191c1d',
        'on-surface-variant': '#40493d',
        'surface-container-low': '#f3f4f5',
        'surface-container': '#edeeef',
        'surface-container-lowest': '#ffffff',
        'surface-container-high': '#e7e8e9',
        'outline-variant': '#bfcaba',
        outline: '#707a6c',
        navy: '#0d1b2a',
      },
      maxWidth: {
        'container-max': '1280px',
      },
      spacing: {
        'margin-desktop': '48px',
        'margin-mobile': '16px',
        gutter: '24px',
      },
      fontSize: {
        'display-lg': ['48px', { lineHeight: '56px', letterSpacing: '-0.02em', fontWeight: '700' }],
        'headline-lg': ['32px', { lineHeight: '40px', letterSpacing: '-0.01em', fontWeight: '700' }],
        'headline-md': ['24px', { lineHeight: '32px', fontWeight: '600' }],
        'body-lg': ['18px', { lineHeight: '28px', fontWeight: '400' }],
        'body-md': ['16px', { lineHeight: '24px', fontWeight: '400' }],
        'label-bold': ['14px', { lineHeight: '20px', letterSpacing: '0.05em', fontWeight: '600' }],
      },
      borderRadius: {
        '3xl': '1.5rem',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
