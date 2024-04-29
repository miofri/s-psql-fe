import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface AuthState {
	user: string | undefined;
	token: string | undefined;
}
const initialState: AuthState = { user: undefined, token: undefined };

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setCredentials: (state, action: PayloadAction<AuthState>) => {
			state.user = action.payload.user;
			state.token = action.payload.token;
		},
	},
});
