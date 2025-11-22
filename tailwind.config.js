/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#DC2626',     // Primary Action (Red)
          darkRed: '#991B1B', // Deep Red
          gold: '#F59E0B',    // Accent (Gold)
          black: '#000000',   // Main Background (Pure Black)
          surface: '#111827', // Card Background (Gray 900)
          text: '#F9FAFB',    // Main Text (Gray 50)
          muted: '#9CA3AF',   // Muted Text (Gray 400)

          // Legacy/Mapped keys to prevent breakages during migration
          navy: '#111827',
          blue: '#F59E0B',
          light: '#111827',   // Mapped to Surface for dark mode
          dark: '#F9FAFB',    // Mapped to Text for dark mode
          cream: '#000000',
        },
        accent: {
          yellow: '#EAB308', // Highlight
          red: '#EF4444',    // Error
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 12s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}
