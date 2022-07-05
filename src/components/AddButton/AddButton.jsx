import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as AddIcon } from 'assets/icons/add_icon.svg';
import { CustomButton } from 'components/AddButton/styles';

export const AddButton = ({ name, ...props }) => (
	<CustomButton {...props}>
		<AddIcon />
		<span>{name}</span>
	</CustomButton>
);

AddButton.propTypes = {
	onClick: PropTypes.func,
	name: PropTypes.string
};
