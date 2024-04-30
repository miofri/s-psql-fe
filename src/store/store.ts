import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import {
	persistStore,
	persistReducer,
	FLUSH,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
	REHYDRATE,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';
import { authSlice } from './authSlice';
import { api } from './rtk/api';

const persistConfig = {
	key: 'auth',
	storage,
};

const authReducer = authSlice.reducer;

const persistedReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
	reducer: {
		[api.reducerPath]: api.reducer,
		auth: persistedReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}).concat(api.middleware),
});
setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
