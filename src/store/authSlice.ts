import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Credentials } from '../interfaces/Auth.interfaces';

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
		clearCredentials: (state) => {
			state.user.email = '';
			state.user.user_id = 0;
			state.token = '';
		},
	},
});

export const { setCredentials, clearCredentials } = authSlice.actions;
