import React from 'react';
import { ChannelRow } from 'features/SecondTab/ChannelRow/ChannelRow';
import { useSelector } from 'react-redux';

export const SecondTab = () => {
	const { channels } = useSelector((state) => state.channelsData);

	return channels.map((channel) => (
		<ChannelRow key={channel.id} channelData={channel} channels={channels} />
	));
};
