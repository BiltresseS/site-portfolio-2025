/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'media',
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    safelist: [
        'bg-gradient-accent',
        'bg-gradient-accent-right',
    ],
    theme: {
        extend: {
            keyframes: {
                fadeSlideIn: {
                    '0%': { opacity: '0', transform: 'translateY(-8px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                fadeIn: {
                    from: { opacity: '0' },
                    to: { opacity: '1' },
                },
            },
            animation: {
                'fade-slide-in': 'fadeSlideIn 1s ease-out',
                'fade-in': 'fadeIn 1s ease-in-out',
            },
        },
    },
    plugins: [],
};
