import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as InfoIcon } from 'assets/icons/info_icon.svg';
import { Tooltip } from 'components';
import { LabelWithTooltipWrapper } from 'components/LabelWithTooltip/styles';

export const LabelWithTooltip = ({ label, tooltipDescription }) => {
	const [isShow, setIsShow] = useState(false);

	return (
		<LabelWithTooltipWrapper>
			{label}
			<InfoIcon
				className="info-icon"
				onMouseOver={() => setIsShow(true)}
				onMouseLeave={() => setIsShow(false)}
			/>
			<Tooltip positionX="right" isShow={isShow} tooltipDescription={tooltipDescription} />
		</LabelWithTooltipWrapper>
	);
};

LabelWithTooltip.propTypes = {
	label: PropTypes.string,
	tooltipDescription: PropTypes.string
};
