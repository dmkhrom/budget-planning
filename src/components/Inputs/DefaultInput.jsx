import React from 'react';
import { CustomInput } from 'components/Inputs/styles';

export const DefaultInput = ({ inputRef, ...props }) => (
	<CustomInput
		ref={inputRef}
		{...props}
	/>
);
