/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                'royal-blue': {
                    50: '#f0f4fe',
                    100: '#dee6fb',
                    200: '#c5d5f8',
                    300: '#9cbbf4',
                    400: '#6d95ed',
                    500: '#4069e4',
                    600: '#3654da',
                    700: '#2d42c8',
                    800: '#2b38a2',
                    900: '#273381',
                    950: '#1c214f',
                },
            },
        },
    },
    plugins: ['prettier-plugin-tailwindcss'],
};
