import React, { useEffect, useState } from 'react';
import {ReactComponent as ChannelActionsIcon} from 'assets/icons/actions_icon.svg';
import { ActionsItem, ActionsMenu, ChannelActionsWrapper } from 'features/FirstTab/Channel/styles';

export const ChannelActions = ({ id, editChannelName, removeChannel }) => {
	const [showActions, setShowActions] = useState(false);

	useEffect(() => {
		const hideShowActions = () => setShowActions(false);
		document.addEventListener('click', hideShowActions);

		return () => document.removeEventListener('click', hideShowActions);
	}, []);

	const handleOpen = () => {
		setShowActions(!showActions);
	};

	const handleEdit = () => {
		editChannelName(true);
		setShowActions(false);
	};
	const handleRemove = () => {
		removeChannel(id);
		setShowActions(false);
	};

	return (
		<ChannelActionsWrapper onClick={e => e.stopPropagation()}>
			<ChannelActionsIcon className='actions-icon' onClick={handleOpen} />
			{showActions && (
				<ActionsMenu>
					<ActionsItem onClick={handleEdit}> Edit </ActionsItem>
					<ActionsItem onClick={handleRemove}> Remove </ActionsItem>
				</ActionsMenu>
			)}
		</ChannelActionsWrapper>
	);
};
