import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as ChannelActionsIcon } from 'assets/icons/actions_icon.svg';
import { ActionsItem, ActionsMenu, ChannelActionsWrapper } from 'features/FirstTab/Channel/styles';
import { useOutsideClick } from 'hooks/useOutsideClick';

export const ChannelActions = ({ id, editChannelName, onDeleteChannel }) => {
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
					<ActionsItem className="channel-actions" onClick={() => editChannelName(true)}>
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
	editChannelName: PropTypes.func,
	onDeleteChannel: PropTypes.func
};
