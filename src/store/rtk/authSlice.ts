import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Credentials } from './authApi';

const initialState: Credentials = {
	user: { email: '', user_id: 0 },
	token: '',
};

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setCredentials: (state, action: PayloadAction<Credentials>) => {
			state.user = action.payload.user;
			state.token = action.payload.token;
		},
	},
});

export const { setCredentials } = authSlice.actions;
