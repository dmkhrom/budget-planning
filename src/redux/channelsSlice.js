import { createSlice } from '@reduxjs/toolkit';
import { getInitialChannelData } from 'utils';

const initialState = {
	channelsList: [],
	activeChannelId: null
};

const { actions, reducer } = createSlice({
	name: 'channelsList',
	initialState,
	reducers: {
		addChannel: (state) => {
			const newChannelData = getInitialChannelData();
			state.channelsList.push(newChannelData);
			state.activeChannelId = newChannelData.id;
		},
		setActiveChannelId: (state, { payload }) => {
			state.activeChannelId = payload;
		},
		deleteChannel: (state, { payload }) => {
			state.channelsList = state.channelsList.filter((item) => item.id !== payload);
		},
		updateChannel: (state, { payload }) => {
			const channelIndex = state.channelsList.findIndex((item) => item.id === payload.id);
			state.channelsList[channelIndex] = payload;
		}
	}
});

export const { addChannel, deleteChannel, updateChannel, setActiveChannelId } = actions;

export default reducer;
