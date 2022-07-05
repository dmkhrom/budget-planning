import React from 'react';
import PropTypes from 'prop-types';
import { ItemLabelWrapper } from 'components/ItemLabel/styles';

export const ItemLabel = ({ value }) => <ItemLabelWrapper>{value}</ItemLabelWrapper>;

ItemLabel.propTypes = {
	value: PropTypes.string
};
