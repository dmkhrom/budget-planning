import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as ChannelActionsIcon } from 'assets/icons/actions_icon.svg';
import { ActionsItem, ActionsMenu, ChannelActionsWrapper } from 'features/FirstTab/Channel/styles';
import { useOutsideClick } from 'hooks/useOutsideClick';

export const ChannelActions = ({ id, setIsEditChannelName, onDeleteChannel }) => {
	const [showActions, setShowActions] = useState(false);

	const ref = useOutsideClick(() => setShowActions(false));

	const handleOpenActions = () => {
		setShowActions(!showActions);
	};

	return (
		<ChannelActionsWrapper className="channel-actions" onClick={handleOpenActions} ref={ref}>
			<ChannelActionsIcon />
			{showActions && (
				<ActionsMenu>
					<ActionsItem className="channel-actions" onClick={() => setIsEditChannelName(true)}>
						Edit
					</ActionsItem>
					<ActionsItem className="channel-actions" onClick={() => onDeleteChannel(id)}>
						Remove
					</ActionsItem>
				</ActionsMenu>
			)}
		</ChannelActionsWrapper>
	);
};

ChannelActions.propTypes = {
	id: PropTypes.string,
	setIsEditChannelName: PropTypes.func,
	onDeleteChannel: PropTypes.func
};
