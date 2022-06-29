import { useDispatch, useSelector } from 'react-redux';
import { v4 } from 'uuid';
import { getInitialChannelData } from 'constants/common';
import { addChannel, setActiveChannel, updateChannelsData } from 'redux/reducers/channels';

const useChannelsControl = (channelData) => {
	const { channels, activeChannel } = useSelector((state) => state.channelsData);
	const dispatch = useDispatch();

	const addNewChannel = () => {
		const id = v4();
		const newChannel = getInitialChannelData(id);
		dispatch(addChannel(newChannel));
		console.log('addNewChannel', newChannel);
	};

	const onChangeActiveChannelData = (key, value) => {
		console.log('VALUE', { value, activeChannel });
		dispatch(setActiveChannel({ ...activeChannel, [key]: value }));
	};

	const changeActiveChannel = () => {
		dispatch(setActiveChannel(channelData));
		console.log('changeActiveChannel', channelData);
	};

	const deleteChannel = () => {
		console.log('Delete channel');
	};

	const onUpdateChannelName = (name, channelId) => {
		const channelsList = [...channels];
		const channelIndex = channelsList.findIndex(item => item.id === channelId);
		channelsList[channelIndex] = {...channels[channelIndex], name: name};
		dispatch(updateChannelsData(channelsList));
	};

	return {
		addNewChannel,
		changeActiveChannel,
		deleteChannel,
		onChangeActiveChannelData,
		onUpdateChannelName
	};
};

export default useChannelsControl;
