import React from 'react';
import { TooltipInfo } from 'components/Tooltip/styles';

export const Tooltip = ({ tooltipDescription, isShow }) =>
	<TooltipInfo isShow={isShow}>
		{tooltipDescription}
	</TooltipInfo>;
