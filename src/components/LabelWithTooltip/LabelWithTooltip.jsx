import React, { useState } from 'react';
import { Tooltip } from 'components/Tooltip/Tooltip';
import {ReactComponent as InfoIcon} from 'assets/icons/info_icon.svg';
import { LabelWithTooltipWrapper } from 'components/LabelWithTooltip/styles';

export const LabelWithTooltip = ({ label, tooltipDescription }) => {
	const [isShow, setIsShow] = useState(false);

	return (
		<LabelWithTooltipWrapper>
			{label}
			<InfoIcon
				className='info-icon'
				onMouseOver={() => setIsShow(true)}
				onMouseLeave={() => setIsShow(false)}
			/>
			<Tooltip positionX='right' isShow={isShow} tooltipDescription={tooltipDescription} />
		</LabelWithTooltipWrapper>
	);
};
