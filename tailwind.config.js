/** @type {import('tailwindcss').Config} */
module.exports = {
        content: [
            "./src/**/*.rs",
            "./index.html",
            "./src/**/*.html",
            "./src/**/*.css",
			"./node_modules/flowbite/**/*.js"
        ],
	theme: {
		extend: {},
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/forms'),
	],
};
