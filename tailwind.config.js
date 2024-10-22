/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Adjust this path based on your project structure
  ],
  safelist: [
    // Shadow classes
    "hover:shadow-html",
    "hover:shadow-css",
    "hover:shadow-javascript",
    "hover:shadow-typescript",
    "hover:shadow-react",
    "hover:shadow-nextjs",
    "hover:shadow-bootstrap",
    "hover:shadow-tailwindcss",
    "hover:shadow-nodejs",
    "hover:shadow-python",
    "hover:shadow-java",
    "hover:shadow-php",
    "hover:shadow-expressjs",
    "hover:shadow-django",
    "hover:shadow-springboot",
    "hover:shadow-laravel",
    // Background classes
    "hover:bg-html",
    "hover:bg-css",
    "hover:bg-javascript",
    "hover:bg-typescript",
    "hover:bg-react",
    "hover:bg-nextjs",
    "hover:bg-bootstrap",
    "hover:bg-tailwindcss",
    "hover:bg-nodejs",
    "hover:bg-python",
    "hover:bg-java",
    "hover:bg-php",
    "hover:bg-expressjs",
    "hover:bg-django",
    "hover:bg-springboot",
    "hover:bg-laravel",
  ],

  theme: {
    extend: {
      boxShadow: {
        html: "0 2px 10px #E44D26", // HTML5
        css: "0 2px 10px #1572B6", // CSS3
        javascript: "0 2px 10px #F7DF1E", // JavaScript
        typescript: "0 2px 10px #007ACC", // TypeScript
        react: "0 2px 10px #61DAFB", // React
        nextjs: "0 2px 10px #000000", // Next.js
        bootstrap: "0 2px 10px #563D7C", // Bootstrap
        tailwindcss: "0 2px 10px #38B2AC", // Tailwind CSS
        nodejs: "0 2px 10px #8CC84B", // Node.js
        python: "0 2px 10px #306998", // Python
        java: "0 2px 10px #007396", // Java
        php: "0 2px 10px #4F5B93", // PHP
        expressjs: "0 2px 10px #000000", // Express.js
        django: "0 2px 10px #092E20", // Django
        springboot: "0 2px 10px #6DB33F", // Spring Boot
        laravel: "0 2px 10px #FF2D20", // Laravel
      },
      colors: {
        html: "#E44D26",
        css: "#1572B6",
        javascript: "#F7DF1E",
        typescript: "#007ACC",
        react: "#61DAFB",
        nextjs: "#000000",
        bootstrap: "#563D7C",
        tailwindcss: "#38B2AC",
        nodejs: "#8CC84B",
        python: "#306998",
        java: "#007396",
        php: "#4F5B93",
        expressjs: "#000000",
        django: "#092E20",
        springboot: "#6DB33F",
        laravel: "#FF2D20",
      },
    },
  },
  plugins: [],
};
