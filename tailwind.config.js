/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	safelist: [
		'text-softCyan',
		'text-verySoftCyan',
		'text-verySoftBlue',
		'text-verySoftLimeGreen'
	],
	theme: {
		extend: {
			colors: {
				lightBlue: '#5249ff',
				softCyan: '#5FF7F2',
				veryDarkGray: '#111111',
				verySoftLimeGreen: '#ACF8BB',
				verySoftCyan: '#ACF8EF',
				verySoftBlue: '#ACB4F8',
				brightViolet: '#662DDD',
				darkViolet: '#3904AB'
			},
			screens: {
				sm: '640px',
				md: '768px',
				lg: '1024px',
				xl: '1280px',
				'2xl': '1536px'
			}
		}
	},
	plugins: []
};
