/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'media', // active le dark mode automatiquement selon la config système
    content: [
        "./src/**/*.{js,jsx,ts,tsx}", // adapte selon ta structure de fichiers
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}