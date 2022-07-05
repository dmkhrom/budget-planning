import React from 'react';
import PropTypes from 'prop-types';
import { CustomInput } from 'components/Inputs/styles';

export const DefaultInput = ({ inputRef, ...props }) => <CustomInput ref={inputRef} {...props} />;

DefaultInput.propTypes = {
	onBlur: PropTypes.func,
	onChange: PropTypes.func,
	value: PropTypes.string,
	inputRef: PropTypes.oneOfType([
		PropTypes.func,
		PropTypes.shape({ current: PropTypes.instanceOf(HTMLInputElement) })
	])
};
