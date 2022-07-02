import React from 'react';
import { CustomInput } from 'components/Inputs/styles';

export const DefaultInput = ({ inputRef, handleChange, ...props }) => (
	<CustomInput
		onChange={handleChange}
		ref={inputRef}
		{...props}
	/>
);
