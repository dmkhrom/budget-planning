import React  from 'react';
import { useSelector } from 'react-redux';
import { Channel } from 'features/FirstTab/Channel/Channel';

export const FirstTab = () => {

	const { channels, activeChannel } = useSelector((state) => state.channelsData);
	return (
		channels.map(channel => (
			<Channel
				isActive={activeChannel?.id === channel.id}
				key={channel.id}
				channelData={channel}
				activeChannelData={activeChannel}
			/>
		))
	);
};
