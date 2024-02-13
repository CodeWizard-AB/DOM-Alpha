/** @type {import('tailwindcss').Config} */
export const content = ["./*.{html,js}"];
export const theme = {
	extend: {
		fontFamily: {
			inter: ['"Inter", "sans - serif"'],
			anton: ['"Anton", "sans-serif"'],
			poppin: ['"Poppins", "sans-serif"'],
		},
	},
};
export const plugins = [require("daisyui")];
