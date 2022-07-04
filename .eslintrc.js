module.exports = {
	env: {
		node: true,
		browser: true,
		es2021: true
	},
	extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier'],
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	plugins: ['import', 'react', 'prettier'],
	rules: {
		indent: ['error', 'tab'],
		'react/prop-types': 0,
		'import/order': [
			'error',
			{
				groups: ['builtin', 'external', 'internal'],
				pathGroups: [
					{
						pattern: 'react',
						group: 'external',
						position: 'before'
					}
				],
				pathGroupsExcludedImportTypes: ['react'],
				alphabetize: {
					order: 'asc',
					caseInsensitive: true
				}
			}
		],
		'linebreak-style': ['error', 'unix'],
		quotes: ['error', 'single'],
		semi: ['error', 'always']
	},
	settings: {
		'import/resolver': {
			node: {
				moduleDirectory: ['node_modules', 'src']
			}
		},
		react: {
			'version': 'detect',
		}
	}
};
