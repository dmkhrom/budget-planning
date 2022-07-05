import React from 'react';
import PropTypes from 'prop-types';
import { CustomNumericInput } from 'components/Inputs/styles';

export const NumericInput = ({ ...props }) => (
	<CustomNumericInput onClick={(e) => e.stopPropagation()} {...props} />
);

NumericInput.propTypes = {
	value: PropTypes.number,
	onChange: PropTypes.func,
	disabled: PropTypes.bool,
	allowLeadingZeros: PropTypes.bool,
	isNumericString: PropTypes.bool,
	allowNegative: PropTypes.bool,
	thousandSeparator: PropTypes.bool
};
