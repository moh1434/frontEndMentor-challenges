module.exports = {
	purge: {
		content: ['./public/index.html']
	},

	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				'Rubik': ['Rubik', 'Arial', 'sans-serif']
			},
			colors: {
				"blue-grayish": "hsl(206, 6%, 79%)",
				violet: {
					// Primary
					"pale": "hsl(276, 100%, 81%)",
					"moderate": "hsl(276, 55%, 52%)",
					"dark": "hsl(271, 15%, 43%)",
					"very-dark": "hsl(271, 36%, 24%)",
					"dark-grayish": "hsl(270, 7%, 64%)",
					// Secondary
					"light-grayish": "hsl(270, 20%, 96%)",
				},
				magenta: {
					"very-light ": "hsl(289, 100%, 72%)"
				}
			}
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
