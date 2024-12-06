/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                cursive: ['var(--font-cursive)'],
                handwritten: ['var(--font-handwritten)'],
                elegant: ['var(--font-elegant)'],
                playful: ['var(--font-playful)'],
            },
        },
    },
    plugins: [],
    darkMode: 'class',
}

