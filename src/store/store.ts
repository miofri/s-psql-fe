import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { blogApi } from './rtk/blogApi';
import { authSlice } from './rtk/authSlice';
import { authApi } from './rtk/authApi';
import { userApi } from './rtk/userApi';

export const store = configureStore({
	reducer: {
		[blogApi.reducerPath]: blogApi.reducer,
		[authApi.reducerPath]: authApi.reducer,
		[userApi.reducerPath]: userApi.reducer,
		auth: authSlice.reducer,
		//[childAPI.reducerPath]: childAPI.reducer,
		//[parentsComboAPI.reducerPath]: parentsComboAPI.reducer,
		//selectPal: selectPalSlice.reducer,
		//selectPalActiveSlot: selectPalActiveSlotSlice.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(
			//breedingPalApi.middleware,
			//childAPI.middleware,
			//parentsComboAPI.middleware
			blogApi.middleware,
			authApi.middleware,
			userApi.middleware
		),
});
setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
