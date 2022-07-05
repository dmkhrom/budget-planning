import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Tooltip } from 'components';
import { ItemValue } from 'features/SecondTab/ChannelRow/styles';

const MAX_VISIBLE_SYMBOLS = 9;

export const BreakDownItemValue = ({ value }) => {
	const [showTooltip, setShowTooltip] = useState(false);

	return (
		<ItemValue
			onMouseEnter={() => value.length > MAX_VISIBLE_SYMBOLS && setShowTooltip(true)}
			onMouseLeave={() => setShowTooltip(false)}
		>
			{value}
			<Tooltip positionX="left" isShow={showTooltip} tooltipDescription={value} />
		</ItemValue>
	);
};

BreakDownItemValue.propTypes = {
	value: PropTypes.string
};
