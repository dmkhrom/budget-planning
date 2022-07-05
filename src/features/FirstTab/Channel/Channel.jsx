import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { ChannelInfo, ChannelActions } from 'features/FirstTab/Channel/components';
import { Budget } from 'features/FirstTab/Channel/components/Budget';
import { ChannelCollapse, ChannelItem, ChannelWrapper } from 'features/FirstTab/Channel/styles';
import { useFocus } from 'hooks/useFocus';
import { deleteChannel, updateChannelsData } from 'redux/channelsSlice';
import PropTypes from 'prop-types';
import { Tooltip } from 'components';

export const Channel = ({ isActive, channelData, setActiveChannelId }) => {

	const dispatch = useDispatch();

	const [ isEditChannelName, setIsEditChannelName ] = useState(false);
	const [ inputRef, setInputFocus ] = useFocus();

	const { id, name } = channelData;

	useEffect(() => {
		setInputFocus();
	}, [ isEditChannelName ]);

	const changeChannelName = (e) => {
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
					changeChannelName={changeChannelName}
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

Tooltip.propTypes = {
	isActive: PropTypes.bool,
	channelData: PropTypes.shape({
		id: PropTypes.string,
		name: PropTypes.number,
		allocation: PropTypes.string,
		frequency: PropTypes.string,
		breakdownData: PropTypes.arrayOf(
			PropTypes.shape({
				title: PropTypes.string.isRequired,
				price: PropTypes.number.isRequired,
				duration: PropTypes.number.isRequired,
				mentor: PropTypes.string.isRequired,
				TA: PropTypes.string.isRequired,
				classesPerWeek: PropTypes.number.isRequired,
			})
		),
		amount: PropTypes.number
	}),
	setActiveChannelId: PropTypes.func
};
