import React, { useCallback, useEffect, useState } from 'react';
import { Budget } from 'features/FirstTab/Channel/components/Budget/Budget';
import { ChannelActions } from 'features/FirstTab/Channel/components/ChannelActions';
import { ChannelInfo } from 'features/FirstTab/Channel/components/ChannelInfo';
import { debounce } from 'lodash';
import { useDispatch } from 'react-redux';
import { ChannelCollapse, ChannelItem, ChannelWrapper } from 'features/FirstTab/Channel/styles';
import { useFocus } from 'hooks/useFocus';
import { deleteChannel, updateChannelsData } from 'redux/channelsSlice';

export const Channel = ({ isActive, channelData, setActiveChannelId }) => {

	const dispatch = useDispatch();

	const [ isEditChannelName, setIsEditChannelName ] = useState(false);
	const [ inputRef, setInputFocus ] = useFocus();

	const { id, name } = channelData;

	useEffect(() => {
		setInputFocus();
	}, [ isEditChannelName ]);

	const changeChannelName = (e) => {
		e.stopPropagation();
		const dataToUpdate = {
			...channelData,
			name: e.target.value
		};
		dispatch(updateChannelsData(dataToUpdate));
	};

	const handleChangeActiveChannel = (e) => {
		e.stopPropagation();
		setActiveChannelId(isActive ? null : id);
	};

	const onDeleteChannel = () => {
		dispatch(deleteChannel(id));
	};

	const onCloseNameEdit = () => {
		setIsEditChannelName(false);
	};

	const debouncedChannelNameChanging = useCallback(
		() => debounce(changeChannelName, 200),
		[channelData]
	);

	return (
		<ChannelWrapper>
			<ChannelItem isActive={isActive} onClick={handleChangeActiveChannel}>
				<ChannelInfo
					channelName={name}
					isEdit={isEditChannelName}
					onCloseNameEdit={onCloseNameEdit}
					changeChannelName={debouncedChannelNameChanging()}
					inputRef={inputRef}
				/>
				<ChannelActions
					id={id}
					editChannelName={setIsEditChannelName}
					removeChannel={onDeleteChannel}
				/>
			</ChannelItem>
			{isActive && (
				<ChannelCollapse>
					<Budget channelData={channelData}/>
				</ChannelCollapse>
			)}
		</ChannelWrapper>
	);
};