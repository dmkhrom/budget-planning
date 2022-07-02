import React from 'react';
import { CustomNumericInput } from 'components/Inputs/styles';

export const NumericInput = ({ inputRef, handleChange, ...props }) => (
	<CustomNumericInput
		onChange={handleChange}
		onClick={(e) => e.stopPropagation()}
		ref={inputRef}
		{...props}
	/>
);
