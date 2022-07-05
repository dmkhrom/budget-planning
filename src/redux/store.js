import { configureStore } from '@reduxjs/toolkit';
import channelsSliceReducer from 'redux/channelsSlice';

export default configureStore({
	reducer: {
		channels: channelsSliceReducer
	}
});
