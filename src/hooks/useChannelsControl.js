import { useDispatch, useSelector } from 'react-redux';
import { v4 } from 'uuid';
import { getInitialChannelData } from 'constants/common';
import { updateObjectValueInArrayOfObjects } from 'features/utils';
import { addChannel, deleteChannel, setActiveChannel, updateChannelsData } from 'redux/reducers/channels';

const useChannelsControl = () => {
	const { channels, activeChannel } = useSelector((state) => state.channelsData);
	const dispatch = useDispatch();

	const onUpdateChannels = (channelsArray, updatedChannel) => {
		const channelIndex = channelsArray.findIndex(item => item.id === updatedChannel.id);

		console.log('onUpdateChannels', {channelsArray, updatedChannel});
		channelsArray[channelIndex] = updatedChannel;
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
		onUpdateChannels([...channels, newChannel], activeChannel);
		dispatch(setActiveChannel(newChannel));
	};

	const onUpdateActiveChannelData = (newValue) => {
		dispatch(setActiveChannel({ ...activeChannel, ...newValue }));
	};

	const onChangeActiveChannel = (channelData) => {
		if(activeChannel) {
			onUpdateChannels([...channels], activeChannel);
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
		onUpdateChannelName,
		onUpdateChannels
	};
};

export default useChannelsControl;
