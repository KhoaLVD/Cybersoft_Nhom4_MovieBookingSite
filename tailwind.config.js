const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "#121212",
                    light: "#1A1A1A",
                },
                secondary: {
                    DEFAULT: "#B71C1C",
                    dark: "#8B0000",
                },
                accent: {
                    DEFAULT: "#FFD700",
                    hover: "#FFC107",
                },
            },
            gridTemplateColumns: {
                // Simple 16 column grid
                16: "repeat(16, minmax(0, 1fr))",
            },
            gridTemplateRows: {
                // Simple 16 column grid
                16: "repeat(16, minmax(0, 1fr))",
            },
        },
    },
    plugins: [flowbite.plugin()],
};
