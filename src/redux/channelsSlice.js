import { createSlice } from '@reduxjs/toolkit';
import { getInitialChannelData } from 'utils';

const { actions, reducer } = createSlice({
	name: 'channelsList',
	initialState: [],
	reducers: {
		addChannel: (state) => {
			state.push(getInitialChannelData());
		},
		deleteChannel: (state, { payload }) => {
			return state.filter((item) => item.id !== payload);
		},
		updateChannelsData: (state, { payload }) => {
			const channelIndex = state.findIndex((item) => item.id === payload.id);
			state[channelIndex] = payload;
		}
	}
});

export const { addChannel, deleteChannel, updateChannelsData } = actions;

export default reducer;
