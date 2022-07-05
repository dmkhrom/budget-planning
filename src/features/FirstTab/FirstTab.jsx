import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Channel } from 'features/FirstTab/Channel';

export const FirstTab = () => {
	const [activeChannelId, setActiveChannelId] = useState(null);
	const { channels } = useSelector((state) => state);

	return channels.map((channel) => (
		<Channel
			key={channel.id}
			isActive={activeChannelId === channel.id}
			channelData={channel}
			setActiveChannelId={setActiveChannelId}
		/>
	));
};
