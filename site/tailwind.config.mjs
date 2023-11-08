/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary' : 'hsla(35, 100%, 55%, 1)',
				'primary-light': 'hsla(32, 95%, 77%, 1)',
				'primary-super-light': 'hsla(32, 95%, 77%, 0.5)',
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
