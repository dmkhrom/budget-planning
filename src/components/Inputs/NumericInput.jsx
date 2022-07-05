import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CustomNumericInput } from 'components/Inputs/styles';

export const NumericInput = ({ inputRef, ...props }) => (
	<CustomNumericInput onClick={(e) => e.stopPropagation()} ref={inputRef} {...props} />
);

NumericInput.propTypes = {
	inputRef: PropTypes.oneOfType([
		PropTypes.func,
		PropTypes.shape({ current: PropTypes.instanceOf(Component) })
	])
};
