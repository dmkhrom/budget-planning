import { createSlice } from '@reduxjs/toolkit';
import { getInitialChannelData } from 'utils';

const initialState = {
	channels: []
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
		updateChannelsData: (state, { payload }) => {
			const channelIndex = state.channels.findIndex((item) => item.id === payload.id);
			state.channels[channelIndex] = payload;
		}
	}
});

const { actions, reducer } = channelsSliceReducer;

export const { addChannel, deleteChannel, updateChannelsData } = actions;

export default reducer;
