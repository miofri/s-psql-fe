/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				sidebar: '#33043b',
				background: '#00051a',
			},
		},
	},
	// eslint-disable-next-line no-undef
	plugins: [require('daisyui')],
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: '#6B8AFE',
					secondary: '#74029D',
					accent: '#FD0CE6',
				},
			},
		],
	},
};
