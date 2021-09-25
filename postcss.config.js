// postcss.config.js
let cssnano = null;
if (process.env.NODE_ENV === "production") {
	cssnano = require('cssnano')({
		preset: ['default', {
			discardComments: {
				removeAll: true,
			},
		}],
	})
}
module.exports = {
	plugins: [
		require("postcss-import"),
		require('tailwindcss'),
		require('autoprefixer'),
		require('postcss-discard-comments'),
		cssnano
	]
}