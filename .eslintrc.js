module.exports = {
	'env': {
		'browser': true,
		'es2021': true
	},
	'extends': [
		'plugin:react/recommended',
		'plugin:import/errors',
		'plugin:import/warnings'
	],
	'parserOptions': {
		'ecmaFeatures': {
			'jsx': true
		},
		'ecmaVersion': 'latest',
		'sourceType': 'module'
	},
	'plugins': [
		'import',
		'react'
	],
	'rules': {
		'indent': [
			'error',
			'tab'
		],
		'react/prop-types': 0,
		'import/order': [
			'error',
			{
				'groups': [
					'builtin',
					'external',
					'internal'
				],
				'pathGroups': [
					{
						'pattern': 'react',
						'group': 'external',
						'position': 'before'
					}
				],
				'pathGroupsExcludedImportTypes': [ 'react' ],
				'alphabetize': {
					'order': 'asc',
					'caseInsensitive': true
				}
			}
		],
		'linebreak-style': [
			'error',
			'windows'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'always'
		]
	},
	'settings': {
		'import/resolver': {
			'node': {
				'moduleDirectory': [
					'node_modules',
					'src'
				]
			}
		}
	}
};
