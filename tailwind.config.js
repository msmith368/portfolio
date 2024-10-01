module.exports = {
	content: ['./index.html', './src/**/*.{jsx,js}'],
	darkMode: 'class',
	theme: {
	  extend: {
		fontFamily: {
		  inter: ['inter', 'serif'],
		},
		colors: {
		  darkbg: '#222436',
		  darktitle: '#6ce1fc',
		  darkoutline: '#16161e',
		  darklabel: '#F0C76B',
		  darkproject: '#C3E88D',
		  darktext: '#BB86FC',
		  darkbox: '#D8BFD8',
		},
		borderWidth: {
		  3: '3px', // Adding custom border width of 3 pixels
		},
		textShadow: {
		  glow: `0 0 5px #6ce1fc,
				 0 0 10px #6ce1fc,
				 0 0 15px #6ce1fc,
				 0 0 20px #6ce1fc,
				 0 0 25px #6ce1fc,
				 0 0 30px #6ce1fc`,
		},
	  },
	},
	plugins: [
		function ({ addUtilities }) {
			addUtilities({
				'.text-shadow-glow': {
					textShadow: `0 0 5px rgba(84, 161, 194, 0.8),
                     0 0 10px rgba(84, 161, 194, 0.8),
                     0 0 15px rgba(84, 161, 194, 0.8), 
                     0 0 20px rgba(84, 161, 194, 0.8), 
                     0 0 25px rgba(84, 161, 194, 0.8), 
                     0 0 30px rgba(84, 161, 194, 0.8)`,
				},
			}, ['responsive', 'hover', 'dark']);
		},
	],
};
