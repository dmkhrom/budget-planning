import React from 'react';
import {ReactComponent as AddIcon} from 'assets/icons/add_icon.svg';
import { CustomButton } from 'components/AddButton/styles';

export const AddButton = ({ name, ...props }) => (
	<CustomButton {...props}>
		<AddIcon />
		<span>{name}</span>
	</CustomButton>
);
