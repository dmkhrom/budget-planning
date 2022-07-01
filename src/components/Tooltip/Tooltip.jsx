import React from 'react';
import { TooltipInfo } from 'components/Tooltip/styles';

export const Tooltip = ({ tooltipDescription, ...props }) => (
	<TooltipInfo {...props} >{tooltipDescription}</TooltipInfo>
);
