import React from 'react';
import PropTypes from 'prop-types';
import { TooltipInfo } from 'components/Tooltip/styles';

export const Tooltip = ({ tooltipDescription, ...props }) => (
	<TooltipInfo {...props} >{tooltipDescription}</TooltipInfo>
);

Tooltip.propTypes = {
	tooltipDescription: PropTypes.string
};
