/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./App.tsx"
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                mono: ['Fira Code', 'Courier New', 'monospace'],
            },
            colors: {
                industrial: {
                    black: '#1a1a1a',
                    gray: '#e5e5e5',
                    darkGray: '#404040',
                    accent: '#ff4d00', // Safety Orange
                    success: '#00cc66',
                    warning: '#ffcc00',
                }
            },
            boxShadow: {
                'hard': '4px 4px 0px 0px rgba(0,0,0,1)',
                'hard-sm': '2px 2px 0px 0px rgba(0,0,0,1)',
            }
        },
    },
    plugins: [],
}
