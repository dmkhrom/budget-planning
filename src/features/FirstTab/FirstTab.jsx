import React, { useState } from 'react';
import { Channel } from 'features/FirstTab/Channel/Channel';
import { useSelector } from 'react-redux';

export const FirstTab = () => {

	const [activeChannelId, setActiveChannelId] = useState(null);
	const { channels } = useSelector((state) => state.channelsData);

	return channels.map((channel) => (
		<Channel
			key={channel.id}
			isActive={activeChannelId === channel.id}
			channelData={channel}
			setActiveChannelId={setActiveChannelId}
		/>
	));
};
