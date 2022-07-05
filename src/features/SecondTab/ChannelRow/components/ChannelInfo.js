import React from 'react';
import { ReactComponent as ChannelIcon } from 'assets/icons/channel_icon.svg';
import { ChannelInfoWrapper, ChannelLabel, ChannelName, ChannelInfoBlock } from 'features/SecondTab/ChannelRow/styles';

export const ChannelInfo = ({ name }) => (
	<ChannelInfoWrapper>
		<ChannelLabel>Channel</ChannelLabel>
		<ChannelInfoBlock>
			<ChannelIcon />
			<ChannelName>{name}</ChannelName>
		</ChannelInfoBlock>
	</ChannelInfoWrapper>
);
