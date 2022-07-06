import React from 'react';
import PropTypes from 'prop-types';
import { IconButtonWrapper } from 'components/IconButton/styles';

export const IconButton = ({children, ...props}) => (
	<IconButtonWrapper {...props}>
		{children}
	</IconButtonWrapper>
);

IconButton.propTypes = {
	onClick: PropTypes.func,
	children: PropTypes.node,
	buttonRef: PropTypes.oneOfType([
		PropTypes.func,
		PropTypes.shape({ current: PropTypes.instanceOf(HTMLInputElement) })
	])
};
