/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		extend: {
			container: {
				center: true
			},
			fontFamily: {
				sans: ['archivo', 'poppins', 'sans-serif']
			}
		}
	},
	plugins: []
};
