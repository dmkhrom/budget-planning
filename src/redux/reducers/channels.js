import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	channels: [],
	activeChannel: null
};

const channelsSliceReducer = createSlice({
	name: 'channelsList',
	initialState,
	reducers: {
		addChannel: (state, action) => {
			state.channels.push(action.payload);
			state.activeChannel = action.payload;
		},
		updateChannelsData: (state, action) => {
			state.channels = action.payload;
		},
		setActiveChannel: (state, action) => {
			state.activeChannel = action.payload;
		},
	}
});

const { actions } = channelsSliceReducer;

export const { addChannel, setActiveChannel, updateChannelsData } = actions;

export default channelsSliceReducer;
