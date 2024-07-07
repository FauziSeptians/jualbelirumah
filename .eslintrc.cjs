module.exports = {
	root: true,
	env: {
		browser: true,
		es2020: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react-hooks/recommended',
	],
	ignorePatterns: ['dist', '.eslintrc.cjs', 'tailwind.config.js'],
	parser: '@typescript-eslint/parser',
	plugins: ['react-refresh', 'unused-imports'],
	rules: {
		'react-refresh/only-export-components': [
			'warn',
			{ allowConstantExport: true },
		],
		'unused-imports/no-unused-imports': 'warn',
		'@typescript-eslint/no-unused-vars': 'off', // Atur ke 'off' jika Anda ingin mematikan peringatan untuk variabel tidak terpakai
		'@typescript-eslint/no-explicit-any': 'off', // Memperbolehkan penggunaan 'any'
	},
}
