import React, { useEffect, useState } from 'react';
import channelActionsIcon from 'assets/icons/actions_icon.svg';
import { ActionsItem, ActionsMenu, ChannelActionsWrapper } from 'features/FirstTab/Channel/styles';

export const ChannelActions = ({ id, editChannelName, removeChannel }) => {

	const [ showActions, setShowActions ] = useState(false);

	useEffect(() => {
		document.addEventListener('click', () => {
			setShowActions(false);
		});

		return () => {
			document.removeEventListener('click', () => {
				setShowActions(false);
			});
		};
	}, []);

	const handleOpen = (e) => {
		e.stopPropagation();
		setShowActions(!showActions);
	};

	const handleEdit = (e) => {
		e.stopPropagation();
		editChannelName(true);
		setShowActions(false);
	};
	const handleRemove = (e) => {
		e.stopPropagation();
		removeChannel(id);
		setShowActions(false);
	};

	return (
		<ChannelActionsWrapper onClick={handleOpen}>
			<img
				className='action-icon'
				src={channelActionsIcon}
				alt='channel actions'
			/>
			{showActions && (
				<ActionsMenu>
					<ActionsItem onClick={handleEdit}> Edit </ActionsItem>
					<ActionsItem onClick={handleRemove}> Remove </ActionsItem>
				</ActionsMenu>)}
		</ChannelActionsWrapper>
	);
};
