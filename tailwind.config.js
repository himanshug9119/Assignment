/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "yellow-light": "#FFF8DB",
        "blue-dark": "#EAF4FF",
        "orange-light": "#FFF7EE",
        "gray-dark": "#956f00",
        "eye-color": "#ffc879",
        "order-color": "#ffebd5",
        // backgroundColor: "#fffdfa",
        "button-color": "#2a2a2a",
        "delivery-color": "#f1f1f1",
        "exception-color": "#5e4200",
        "intransit-color": "#956f00",
        "pending-color": "#e5a500",
        "delivered-color": "#ffc879",
        "out-for-delivery-color": "#ffddb6",
      },
    },
  },
  plugins: [],
};


