import React, { useState } from 'react';
import { Tooltip } from 'components/Tooltip/Tooltip';
import { ItemValue } from 'features/SecondTab/ChannelRow/styles';

const MAX_VISIBLE_SYMBOLS = 8;

export const BreakDownItemValue = ({ value }) => {

	const [showTooltip, setShowTooltip] = useState(false);

	return (
		<ItemValue
			onMouseEnter={() => value.length > MAX_VISIBLE_SYMBOLS && setShowTooltip(true)}
			onMouseLeave={() => setShowTooltip(false)}
		>
			{value}
			<Tooltip
				positionX='left'
				isShow={showTooltip}
				tooltipDescription={value}
			/>
		</ItemValue>
	);
};
