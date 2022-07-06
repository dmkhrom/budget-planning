import React from 'react';
import { useSelector } from 'react-redux';
import { ChannelRow } from 'features/SecondTab/ChannelRow';

export const SecondTab = () => {
	const { channelsList } = useSelector((state) => state.channelsData);

	return channelsList.map((channel) => <ChannelRow key={channel.id} channelData={channel} />);
};
