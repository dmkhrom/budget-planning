import React from 'react';
import { CustomInput } from 'components/Inputs/styles';

export const DefaultInput = ({ value, inputRef, handleChange, ...props }) => (
	<CustomInput
		value={value}
		onChange={handleChange}
		onClick={(e) => e.stopPropagation()}
		ref={inputRef}
		{...props}
	/>
);
