/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	safelist: [
		'text-softCyan',
		'text-verySoftCyan',
		'text-verySoftBlue',
		'text-verySoftLimeGreen',
		'text-verySoftRed',
		'text-verySoftOrange'
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
				verySoftOrange: '#F8D3AC',
				brightViolet: '#662DDD',
				darkViolet: '#3904AB',
				darkCyanLimeGreen: '#0f8944',
				brightCyanLimeGreen: '#3ff896',
				gray: '#575757',
				darkGray: '#353535',
				darkerGray: '#1D1D1D',
				softViolet: '#A176FB',
				verySoftRed: '#f8acac',
				darkBlue: '#292486'
			},
			screens: {
				sm: '640px',
				md: '768px',
				lg: '1024px',
				xl: '1280px',
				'2xl': '1536px'
			},
			dropShadow: {
				brightCyanLimeGreen: '-4px 4px 200px rgba(62, 245, 148, 0.8)',
				strongBlue: '0px 0px 200px rgba(0, 20, 195, 0.7)'
			},
			boxShadow: {
				white: '0px 0px 10px rgba(255, 255, 255, 0.2)'
			},
			listStyleType: {
				square: 'square'
			}
		}
	},
	plugins: []
};
