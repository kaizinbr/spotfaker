/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./app/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                default: ["var(--font-inter)"],
            },
            colors: {
                seashell: {
                    50: "#fdfdfd",
                    100: "#f1f1f1",
                    200: "#dcdcdc",
                    300: "#bdbdbd",
                    400: "#989898",
                    500: "#7c7c7c",
                    600: "#656565",
                    700: "#525252",
                    800: "#464646",
                    900: "#3d3d3d",
                    950: "#292929",
                },
                deluge: {
                    50: "#f9f7fc",
                    100: "#f3eff8",
                    200: "#e6ddf1",
                    300: "#d4c2e5",
                    400: "#bb9dd5",
                    500: "#9d76bf",
                    600: "#865ca7",
                    700: "#6b4685",
                    800: "#593b6d",
                    900: "#4c345b",
                    950: "#2c1939",
                },
            },
        },
    },
    plugins: [],
};
