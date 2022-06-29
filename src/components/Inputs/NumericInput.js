import React from 'react';
import { CustomNumericInput } from 'components/Inputs/styles';

export const NumericInput = ({value, inputRef, handleChange,  ...props}) => (
	<CustomNumericInput
		value={value}
		onChange={handleChange}
		onClick={(e) => e.stopPropagation()}
		{...props}
	/>
);
