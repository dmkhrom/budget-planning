import React from 'react';
import arrowDown from 'assets/icons/arrow_down_icon.svg';
import channelIcon from 'assets/icons/channel_icon.svg';
import { DefaultInput } from 'components/Inputs/DefaultInput';
import { ChannelDataWrapper } from 'features/FirstTab/Channel/styles';

export const ChannelData = (
	{
		channelName,
		inputRef,
		isEdit,
		onCloseNameEdit,
		changeChannelName
	}
) => (
	<ChannelDataWrapper>
		<img className='chevron-icon' src={arrowDown} alt='collapse icon'/>
		<img className='channel-icon' src={channelIcon} alt='channel icon'/>
		{isEdit
			? <DefaultInput
				onBlur={onCloseNameEdit}
				inputRef={inputRef}
				handleChange={changeChannelName}
				value={channelName}
			/>
			: channelName
		}
	</ChannelDataWrapper>
);
