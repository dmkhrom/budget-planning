import React from 'react';
import { ItemLabelWrapper } from 'components/ItemLabel/styles';
import PropTypes from 'prop-types';
import { AddButton } from 'components/AddButton/AddButton';

export const ItemLabel = ({ value }) => <ItemLabelWrapper>{value}</ItemLabelWrapper>;

AddButton.propTypes = {
	value: PropTypes.string
};
