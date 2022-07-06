import React from 'react';
import { useSelector } from 'react-redux';
import { Channel } from 'features/FirstTab/Channel';

export const FirstTab = () => {
	const { channelsList, activeChannelId } = useSelector((state) => state.channelsData);

	return channelsList.map((channel) => (
		<Channel key={channel.id} isActive={activeChannelId === channel.id} channelData={channel} />
	));
};
