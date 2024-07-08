/** @type {import('tailwindcss').Config} */
const { nextui } = require('@nextui-org/react')
const defaultTheme = require("tailwindcss/defaultTheme");
 
const colors = require("tailwindcss/colors");
const {
	default: flattenColorPalette,
  } = require("tailwindcss/lib/util/flattenColorPalette");
export default {
	content: [
		'./index.html',
		'./src/**/*.{js,ts,jsx,tsx}',
		'./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				primary: '#1252ae',
				secondary: '#ddebf2',
				ternery: '#aaafb7',
				neutral: '#ffffff',
			},
			animation: {
				scroll:
					'scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite',
			},
			keyframes: {
				scroll: {
					to: {
						transform: 'translate(calc(-50% - 0.5rem))',
					},
				},
			},
		},
	},

	plugins: [
		nextui({
			themes: {
				light: {
					colors: {
						primary: {
							DEFAULT: '#1252ae',
							foreground: '#000000',
						},
						focus: '#BEF264',
					},
				},
				dark: {
					colors: {
						primary: {
							DEFAULT: '#BEF264',
							foreground: '#000000',
						},
						focus: '#BEF264',
					},
				},
			},
		}),
		addVariablesForColors
	],
}

function addVariablesForColors({ addBase, theme }) {
	let allColors = flattenColorPalette(theme("colors"));
	let newVars = Object.fromEntries(
	  Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
	);
   
	addBase({
	  ":root": newVars,
	});
  }
