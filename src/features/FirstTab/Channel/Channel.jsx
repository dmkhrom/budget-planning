import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { ChannelInfo, ChannelActions } from 'features/FirstTab/Channel/components';
import { Budget } from 'features/FirstTab/Channel/components/Budget';
import { ChannelCollapse, ChannelItem, ChannelWrapper } from 'features/FirstTab/Channel/styles';
import { useFocus } from 'hooks/useFocus';
import { deleteChannel, updateChannelsData } from 'redux/channelsSlice';

export const Channel = ({ isActive, channelData, setActiveChannelId }) => {
	const dispatch = useDispatch();

	const [isEditChannelName, setIsEditChannelName] = useState(false);
	const [inputRef, setInputFocus] = useFocus();

	const { id, name } = channelData;

	useEffect(() => {
		setInputFocus();
	}, [isEditChannelName]);

	const onChangeChannelName = (e) => {
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

	return (
		<ChannelWrapper>
			<ChannelItem isActive={isActive} onClick={handleChangeActiveChannel}>
				<ChannelInfo
					channelName={name}
					isEdit={isEditChannelName}
					onCloseNameEdit={onCloseNameEdit}
					onChangeChannelName={onChangeChannelName}
					inputRef={inputRef}
				/>
				<ChannelActions
					id={id}
					editChannelName={setIsEditChannelName}
					onDeleteChannel={onDeleteChannel}
				/>
			</ChannelItem>
			{isActive && (
				<ChannelCollapse>
					<Budget channelData={channelData} />
				</ChannelCollapse>
			)}
		</ChannelWrapper>
	);
};

Channel.propTypes = {
	isActive: PropTypes.bool,
	channelData: PropTypes.shape({
		id: PropTypes.string,
		name: PropTypes.string,
		allocation: PropTypes.string,
		frequency: PropTypes.string,
		breakdownData: PropTypes.arrayOf(
			PropTypes.shape({
				name: PropTypes.string,
				value: PropTypes.number
			})
		),
		amount: PropTypes.number
	}),
	setActiveChannelId: PropTypes.func
};
