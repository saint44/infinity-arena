
import type { Config } from 'tailwindcss';
const config: Config = {
  content: ['./app/**/*.{ts,tsx}','./components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#0F172A',
          cyan: '#22D3EE',
          violet: '#8B5CF6',
          gold: '#D4AF37',
          ink: '#0B1020'
        }
      }
    }
  },
  plugins: []
};
export default config;
