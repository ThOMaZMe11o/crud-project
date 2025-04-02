import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    tailwindcss(),
  ],
  theme: {
    extend: {
      colors: {
        'bg-dracula': '#282A36',   
        'current-dracula': '#44475A', 
        'fg-dracula': '#F8F8F2', 
        'comment': '#6272A4',
        'cyan': '#8BE9FD',
        'green': '#50FA7B',
        'orange': '#FFB86C',
        'pink': '#FF79C6',
        'purple': '#BD93F9',
        'red': '#FF5555',
        'yellow': '#F1FA8C'
      },
    },
  },
})
