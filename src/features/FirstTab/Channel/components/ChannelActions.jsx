import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as ChannelActionsIcon } from 'assets/icons/actions_icon.svg';
import { ActionsItem, ActionsMenu, ChannelActionsWrapper } from 'features/FirstTab/Channel/styles';

export const ChannelActions = ({ id, editChannelName, removeChannel }) => {
	const [showActions, setShowActions] = useState(false);

	useEffect(() => {
		const hideShowActions = () => setShowActions(false);
		document.addEventListener('click', hideShowActions);

		return () => document.removeEventListener('click', hideShowActions);
	}, []);

	const handleOpen = (e) => {
		e.stopPropagation();
		setShowActions(!showActions);
	};

	const handleEdit = () => {
		editChannelName(true);
	};
	const handleRemove = () => {
		removeChannel(id);
	};

	return (
		<ChannelActionsWrapper onClick={handleOpen}>
			<ChannelActionsIcon className="actions-icon" />
			{showActions && (
				<ActionsMenu>
					<ActionsItem onClick={handleEdit}> Edit </ActionsItem>
					<ActionsItem onClick={handleRemove}> Remove </ActionsItem>
				</ActionsMenu>
			)}
		</ChannelActionsWrapper>
	);
};

ChannelActions.propTypes = {
	id: PropTypes.string,
	editChannelName: PropTypes.func,
	removeChannel: PropTypes.func
};
