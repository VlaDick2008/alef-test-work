/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontSize: {
				"16-paragraph-2": "14px",
				"16-paragraph-2-medium": "16px",
				"13-paragraph-3": "13px",
			},
			textColor: {
				primary: "#111111",
				secondary: "rgba(17, 17, 17, 0.5)",
				accent: "#01A7FD",
			},
		},
	},
	plugins: [],
};
