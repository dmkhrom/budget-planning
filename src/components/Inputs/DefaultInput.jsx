import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CustomInput } from 'components/Inputs/styles';

export const DefaultInput = ({ inputRef, ...props }) => (
	<CustomInput
		ref={inputRef}
		{...props}
	/>
);

DefaultInput.propTypes = {
	inputRef: PropTypes.oneOfType([
		PropTypes.func,
		PropTypes.shape({ current: PropTypes.instanceOf(Component) })
	])
};

