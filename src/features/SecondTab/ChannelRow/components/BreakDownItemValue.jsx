import React from 'react';
import PropTypes from 'prop-types';
import { Tooltip } from 'components';
import { ItemValue } from 'features/SecondTab/ChannelRow/styles';

const MAX_VISIBLE_SYMBOLS = 9;

export const BreakDownItemValue = ({ value }) => (
	<Tooltip
		positionX="left"
		disabled={value.length < MAX_VISIBLE_SYMBOLS}
		tooltipDescription={value}
	>
		<ItemValue>{value}</ItemValue>
	</Tooltip>
);

BreakDownItemValue.propTypes = {
	value: PropTypes.string
};
