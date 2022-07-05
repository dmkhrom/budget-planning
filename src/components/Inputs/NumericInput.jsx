import React from 'react';
import { CustomNumericInput } from 'components/Inputs/styles';

export const NumericInput = ({ inputRef, ...props }) => (
	<CustomNumericInput
		onClick={(e) => e.stopPropagation()}
		ref={inputRef}
		{...props}
	/>
);
