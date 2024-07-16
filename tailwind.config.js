/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				sidebar: '#33043b',
			},
		},
	},
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
