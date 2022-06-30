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
		onChangeActiveChannel,
		onDeleteChannel,
		onUpdateChannelName
	} = useChannelsControl();

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
		e.stopPropagation();
		if((!isActive || !activeChannelData)) {
			onChangeActiveChannel(channelData);
			return;
		}
		if(isActive) {
			onChangeActiveChannel(null);
		}
	};

	const onCloseNameEdit = () => {
		setIsEditChannelName(false);
		onUpdateChannelName(channelName, channelData.id);
	};

	return (
		<ChannelWrapper>
			<ChannelItem isActive={isActive} onClick={handleChangeActiveChannel}>
				<ChannelData
					channelName={channelName}
					isEdit={isEditChannelName}
					onCloseNameEdit={onCloseNameEdit}
					changeChannelName={changeChannelName}
					inputRef={inputRef}
				/>
				<ChannelActions
					id={channelData.id}
					editChannelName={setIsEditChannelName}
					removeChannel={onDeleteChannel}
				/>
			</ChannelItem>
			{isActive && <ChannelCollapse>
				<Budget channelData={activeChannelData}/>
			</ChannelCollapse>}
		</ChannelWrapper>
	);
};
