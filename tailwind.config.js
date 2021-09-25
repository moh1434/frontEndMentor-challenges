const plugin = require('tailwindcss/plugin')
module.exports = {
	purge: {
		content: ['./public/index.html']
	},

	darkMode: false, // or 'media' or 'class'
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: '2.25rem',
				lg: '4rem',
				xl: '5rem',
				'2xl': '6rem',
			}
		},
		extend: {
			boxShadow: {
				'phone': '0px 6px 40px 0px rgba(0, 0, 0, 0.25)',
			},
			fontFamily: {
				'Rubik': ['Rubik', 'Arial', 'sans-serif'],
			},
			fontSize: {
				'xxs': '0.625rem',
				'xxxs': '0.5625rem',
				'xxxxs': '0.5rem'
			},
			colors: {
				"blue-grayish": "hsl(206, 6%, 79%)",
				violet: {
					// Primary
					"light": "hsl(264, 100%, 61%)",
					"pale": "hsl(276, 100%, 81%)",
					"moderate": "hsl(276, 55%, 52%)",
					"dark": "hsl(271, 15%, 43%)",
					"very-dark": "hsl(271, 36%, 24%)",
					"dark-grayish": "hsl(270, 7%, 64%)",
					// Secondary
					"light-grayish": "hsl(270, 20%, 96%)",
					'missing': "hsl(292.5,100%,82.7%)"
				},
				magenta: {
					"light": "hsl(293, 100%, 63%)",
					"very-light": "hsl(289, 100%, 72%)"
				}
			},
			maxWidth: {
				"440": "27.5rem",
			},
			spacing: {
				"2p": "0.625rem",
				"16p": "4.125rem",
				"37p": "2.3125", //69-32
				"69p": "4.3125rem",
				'247p': "15.4375rem !important",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [
		plugin(function ({ addUtilities }) {
			const newUtilities = {
				".bg-gradient-right": {
					"background-image": "linear-gradient(to right, hsl(293, 100%, 63%), hsl(264, 100%, 61%))"
				},
				".bg-gradient-left": {
					"background-image": "linear-gradient(to left, hsl(293, 100%, 63%), hsl(264, 100%, 61%))"
				},
				".bg-gradient-bottom": {
					"background-image": "linear-gradient(to bottom, hsl(293, 100%, 63%), hsl(264, 100%, 61%))"
				},
				'.skew-10deg': {
					transform: 'skewY(-10deg)',
				},
			}

			addUtilities(newUtilities)
		})
	]
}
