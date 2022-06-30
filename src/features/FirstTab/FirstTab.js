import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Channel } from 'features/FirstTab/Channel/Channel';
import useChannelsControl from 'hooks/useChannelsControl';

export const FirstTab = () => {

	const { channels, activeChannel } = useSelector((state) => state.channelsData);
	const {
		onChangeActiveChannel
	} = useChannelsControl();

	useEffect(() => {
		if(channels.length) {
			onChangeActiveChannel(channels[0]);
		}
		return () => (
			onChangeActiveChannel(null)
		);
	},[]);

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
