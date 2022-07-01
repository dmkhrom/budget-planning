import React from 'react';
import { DefaultInput } from 'components/Inputs/DefaultInput';
import { ReactComponent as ArrowDown } from 'assets/icons/arrow_down_icon.svg';
import { ReactComponent as ChannelLogo } from 'assets/icons/channel_icon.svg';
import { ChannelInfoWrapper, ChannelNameWrapper } from 'features/FirstTab/Channel/styles';

export const ChannelInfo = ({
	channelName,
	inputRef,
	isEdit,
	onCloseNameEdit,
	changeChannelName
}) => (
	<ChannelInfoWrapper>
		<ArrowDown className='chevron-icon' />
		<ChannelNameWrapper>
			<ChannelLogo className='channel-logo'/>
			{isEdit ?
				(
					<DefaultInput
						onBlur={onCloseNameEdit}
						inputRef={inputRef}
						handleChange={changeChannelName}
						value={channelName}
					/>
				) :
				(
					channelName
				)}
		</ChannelNameWrapper>
	</ChannelInfoWrapper>
);