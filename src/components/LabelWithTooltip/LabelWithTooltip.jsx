import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as InfoIcon } from 'assets/icons/info_icon.svg';
import { Tooltip } from 'components';
import { LabelWithTooltipWrapper } from 'components/LabelWithTooltip/styles';

export const LabelWithTooltip = ({ label, tooltipDescription }) => {
	return (
		<LabelWithTooltipWrapper>
			{label}
			<Tooltip
				positionX="right"
				tooltipDescription={tooltipDescription}
			>
				<InfoIcon className="info-icon"/>
			</Tooltip>
		</LabelWithTooltipWrapper>
	);
};

LabelWithTooltip.propTypes = {
	label: PropTypes.string,
	tooltipDescription: PropTypes.string
};
