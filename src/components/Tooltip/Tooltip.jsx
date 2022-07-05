import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { TooltipContainer, TooltipInfo } from 'components/Tooltip/styles';

export const Tooltip = ({ tooltipDescription, children, disabled, ...props }) => {

	const [showTooltip, setShowTooltip] = useState(false);

	return (
		<TooltipContainer
			onMouseEnter={() => !disabled && setShowTooltip(true)}
			onMouseLeave={() => setShowTooltip(false)}
		>
			{children}
			<TooltipInfo show={showTooltip} {...props}>{tooltipDescription}</TooltipInfo>
		</TooltipContainer>
	);};

Tooltip.propTypes = {
	disabled: PropTypes.bool,
	positionX: PropTypes.string,
	tooltipDescription: PropTypes.string,
	children: PropTypes.node
};
