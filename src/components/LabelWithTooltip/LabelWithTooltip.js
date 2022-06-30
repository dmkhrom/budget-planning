import React, { useState } from 'react';
import infoIcon from 'assets/icons/info_icon.svg';
import { LabelWithTooltipWrapper } from 'components/LabelWithTooltip/styles';
import { Tooltip } from 'components/Tooltip/Tooltip';

export const LabelWithTooltip = ({ label, tooltipDescription }) => {

	const [ isShow, setIsShow ] = useState(false);

	return (
		<LabelWithTooltipWrapper>
			{label}
			<img className='info-icon' src={infoIcon} alt='info-icon'
				onMouseOver={() => setIsShow(true)}
				onMouseLeave={() => setIsShow(false)}
			/>
			<Tooltip isShow={isShow} tooltipDescription={tooltipDescription}/>
		</LabelWithTooltipWrapper>
	);
};
