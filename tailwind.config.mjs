/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#ee2b47',
          light: '#f25a70',
          dark: '#d5112d',
        },
        surface: {
          DEFAULT: '#ffffff',
          muted: '#f6f6f6',
          border: '#dcdcdc',
        },
        ink: {
          DEFAULT: '#0a0a0a',
          muted: '#525252',
          subtle: '#737373',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 3px rgba(0,0,0,0.04), 0 8px 24px rgba(0,0,0,0.06)',
        'card-hover': '0 4px 12px rgba(0,0,0,0.08), 0 16px 40px rgba(0,0,0,0.08)',
      },
    },
  },
  plugins: [],
};
