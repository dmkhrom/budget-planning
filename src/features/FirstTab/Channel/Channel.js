import React, { useEffect, useState } from 'react';
import { Budget } from 'features/FirstTab/Channel/components/Budget/Budget';
import { ChannelActions } from 'features/FirstTab/Channel/components/ChannelActions';
import { ChannelData } from 'features/FirstTab/Channel/components/ChannelData';
import { ChannelCollapse, ChannelItem, ChannelWrapper } from 'features/FirstTab/Channel/styles';
import useChannelsControl from 'hooks/useChannelsControl';
import { useFocus } from 'hooks/useFocus';

export const Channel = ({ isActive, channelData, activeChannelData }) => {

	const [ isEditChannelName, setIsEditChannelName ] = useState(false);
	const [channelName, setChannelName] = useState('');
	const [inputRef, setInputFocus] = useFocus();

	const {
		changeActiveChannel,
		deleteChannel,
		onUpdateChannelName
	} = useChannelsControl(channelData);

	useEffect(() => {
		setInputFocus();
	}, [isEditChannelName]);

	useEffect(() => {
		setChannelName(channelData?.name);
	}, []);

	const changeChannelName = (e) => {
		e.stopPropagation();
		setChannelName(e.target.value);
	};

	const handleChangeActiveChannel = (e) => {
		const {className} = e.target;
		if(className.includes('channel-item') && !isActive) {
			changeActiveChannel();
		}
	};

	const onCloseNameEdit = () => {
		setIsEditChannelName(false);
		onUpdateChannelName(channelName, channelData.id);
	};

	return (
		<ChannelWrapper>
			<ChannelItem className='channel-item' isActive={isActive} onClick={handleChangeActiveChannel}>
				<ChannelData
					channelName={channelName}
					isEdit={isEditChannelName}
					onCloseNameEdit={onCloseNameEdit}
					changeChannelName={changeChannelName}
					inputRef={inputRef}
				/>
				<ChannelActions
					editChannelName={setIsEditChannelName}
					removeChannel={deleteChannel}
				/>
			</ChannelItem>
			{isActive && <ChannelCollapse>
				<Budget channelData={activeChannelData}/>
			</ChannelCollapse>}
		</ChannelWrapper>
	);
};
