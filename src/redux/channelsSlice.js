import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	channels: [],
	activeChannel: null
};

const channelsSliceReducer = createSlice({
	name: 'channelsList',
	initialState,
	reducers: {
		addChannel: (state, { payload }) => {
			state.channels.push(payload);
		},
		deleteChannel: (state, { payload }) => {
			state.channels = state.channels.filter((item) => item.id !== payload);
		},
		setActiveChannel: (state, { payload }) => {
			state.activeChannel = payload;
		},
		updateChannelsData: (state, { payload }) => {
			const immediateChannels = [ ...state.channels ];
			const channelIndex = immediateChannels.findIndex((item) => item.id === payload.id);
			immediateChannels[channelIndex] = payload;
			state.channels = immediateChannels;
		}
	}
});

const { actions } = channelsSliceReducer;

export const { addChannel, deleteChannel, updateChannelsData } = actions;

export default channelsSliceReducer;
