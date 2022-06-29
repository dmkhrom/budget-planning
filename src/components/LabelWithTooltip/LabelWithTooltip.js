import React, { useState } from 'react';
import infoIcon from 'assets/icons/info_icon.svg';
import { LabelWithTooltipWrapper, TooltipInfo } from 'components/LabelWithTooltip/styles';

export const LabelWithTooltip = ({ label, tooltipInfo }) => {

	const [ isShow, setIsShow ] = useState(false);

	return (
		<LabelWithTooltipWrapper>
			{label}
			<img className='info-icon' src={infoIcon} alt='info-icon'
				onMouseOver={() => setIsShow(true)}
				onMouseLeave={() => setIsShow(false)}
			/>
			<TooltipInfo isShow={isShow}>
				{tooltipInfo}
			</TooltipInfo>
		</LabelWithTooltipWrapper>
	);
};
