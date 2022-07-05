const palette = {
	blue: {
		900: '#182033',
		800: '#222A41',
		700: '#2A3558',
		600: '#2F3B66',
		500: '#707EA7',
		400: '#99A4C2',
		300: '#97A4C8'
	},
	red: {
		500: '#EE2032',
		200: '#FDE8EA'
	},
	grey: {
		800: '#7E7E7E',
		700: '#ECECEC',
		600: '#E6E8F0',
		500: '#f6f7fb',
		400: '#f5f6fa',
		300: '#fafafc'

	},
	black: '#000000',
	shadow: '#e6e8f0',
	white: '#ffffff'
};

const sizes = {
	tiny: '11px',
	small: '12px',
	regular: '14px',
	increased: '16px',
	large: '18px',
	huge: '20px',
	giant: '24px'
};

const theme = {
	fontSizes: {
		...sizes
	},
	colors: {
		...palette
	}
};

export { theme };
