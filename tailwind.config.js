/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#e6f7f5',
                    100: '#b3e6de',
                    200: '#80d4c7',
                    300: '#4dc3b0',
                    400: '#1ab299',
                    500: '#00a082', // Main brand color
                    600: '#008069',
                    700: '#006050',
                    800: '#004037',
                    900: '#00201e',
                },
                secondary: {
                    50: '#e8f4f8',
                    100: '#c1e1ed',
                    200: '#9acee2',
                    300: '#73bbd7',
                    400: '#4ca8cc',
                    500: '#2595c1',
                    600: '#1e779a',
                    700: '#165973',
                    800: '#0f3b4c',
                    900: '#071d26',
                },
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
                heading: ['Montserrat', 'sans-serif'],
            },
        },
    },
    plugins: [],
}