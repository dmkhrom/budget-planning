import { useDispatch, useSelector } from 'react-redux';
import { v4 } from 'uuid';
import { getInitialChannelData } from 'constants/common';
import { updateObjectValueInArrayOfObjects } from 'features/utils';
import { addChannel, deleteChannel, setActiveChannel, updateChannelsData } from 'redux/reducers/channels';

const useChannelsControl = () => {
	const { channels, activeChannel } = useSelector((state) => state.channelsData);
	const dispatch = useDispatch();

	const updateChannels = (channelsArray) => {
		console.log();
		const channelIndex = channelsArray.findIndex(item => item.id === activeChannel.id);
		channelsArray[channelIndex] = activeChannel;

		console.log('activeChannel', { channelIndex, channels, channelsArray, activeChannel });
		dispatch(updateChannelsData(channelsArray));
	};

	const onAddNewChannel = (e) => {
		e.stopPropagation();
		const id = v4();
		const newChannel = getInitialChannelData(id);
		if(!activeChannel) {
			dispatch(addChannel(newChannel));
			return;
		}
		updateChannels([...channels, newChannel]);
		dispatch(setActiveChannel(newChannel));
	};

	const onUpdateActiveChannelData = (newValue) => {
		dispatch(setActiveChannel({ ...activeChannel, ...newValue }));
	};

	const onChangeActiveChannel = (channelData) => {
		if(activeChannel) {
			updateChannels([...channels]);
		}
		dispatch(setActiveChannel(channelData));
	};

	const onDeleteChannel = (id) => {
		if(id === activeChannel.id) {
			dispatch(setActiveChannel(null));
		}
		dispatch(deleteChannel(id));
	};

	const onUpdateChannelName = (name, channelId) => {
		const updatedChannelsList = updateObjectValueInArrayOfObjects(
			[...channels],
			'id',
			channelId,
			{ name: name }
		);
		dispatch(updateChannelsData(updatedChannelsList));
	};

	return {
		onAddNewChannel,
		onChangeActiveChannel,
		onDeleteChannel,
		onUpdateActiveChannelData,
		onUpdateChannelName
	};
};

export default useChannelsControl;
