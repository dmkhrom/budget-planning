import { configureStore } from '@reduxjs/toolkit';
import channelsSliceReducer from 'redux/reducers/channels';

export default configureStore({
	reducer: {
		channelsData: channelsSliceReducer.reducer
	}
});
