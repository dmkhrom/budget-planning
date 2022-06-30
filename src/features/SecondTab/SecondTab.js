import React from 'react';
import { useSelector } from 'react-redux';
import { ChannelRow } from 'features/SecondTab/ChannelRow/ChannelRow';

export const SecondTab = () => {

	const { channels } = useSelector((state) => state.channelsData);

	return (
		channels.map(channel => (
			<ChannelRow
				channels={channels}
				key={channel.id}
				channelData={channel}
			/>
		))
	);
};

