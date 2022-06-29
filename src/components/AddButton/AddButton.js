import React from 'react';
import addIcon from 'assets/icons/add_icon.svg';
import { CustomButton } from 'components/AddButton/styles';

export const AddButton = ({ name, onClick, ...props }) =>
	<CustomButton onClick={onClick} {...props}>
		<img src={addIcon} alt='add icon'/>
		{name}
	</CustomButton>;
