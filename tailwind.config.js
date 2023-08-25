/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",

        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
        fontFamily: {
            Oswald: ['var(--font-Oswald)'],
            Anadda: ['var(--font-Anadad)'],
          },
          animation: {
            'bounce-slow': 'bounce 3s linear infinite',
          }
        },
    
    },
    plugins: [],
};
