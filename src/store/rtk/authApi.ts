import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import * as AuthInterface from '../../interfaces/Auth.interfaces';

export const authApi = createApi({
	reducerPath: 'authApi',
	baseQuery: fetchBaseQuery({
		baseUrl: `${import.meta.env.VITE_APP_URL}/api/auth`,
	}),
	endpoints: (builder) => ({
		getToken: builder.mutation<AuthInterface.Credentials, AuthInterface.Auth>({
			query: (body) => ({
				url: `/login`,
				method: 'POST',
				body,
			}),
		}),
	}),
});

export const { useGetTokenMutation } = authApi;
