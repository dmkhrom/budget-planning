import { createSlice } from '@reduxjs/toolkit';
import { getInitialChannelData } from 'utils';

const initialState = {
	channels: [],
	activeChannel: null
};

const channelsSliceReducer = createSlice({
	name: 'channelsList',
	initialState,
	reducers: {
		addChannel: (state) => {
			state.channels.push(getInitialChannelData());
		},
		deleteChannel: (state, { payload }) => {
			state.channels = state.channels.filter((item) => item.id !== payload);
		},
		setActiveChannel: (state, { payload }) => {
			state.activeChannel = payload;
		},
		updateChannelsData: (state, { payload }) => {
			const immediateChannels = [...state.channels];
			const channelIndex = immediateChannels.findIndex((item) => item.id === payload.id);
			immediateChannels[channelIndex] = payload;
			state.channels = immediateChannels;
		}
	}
});

const { actions, reducer } = channelsSliceReducer;

export const { addChannel, deleteChannel, updateChannelsData } = actions;

export default reducer;
