import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface Auth {
	email: string | undefined;
	password: string | undefined;
}

export interface Credentials {
	token: string;
	user: {
		email: string;
		user_id: number;
	};
}
export const authApi = createApi({
	reducerPath: 'authApi',
	baseQuery: fetchBaseQuery({
		baseUrl: `${import.meta.env.VITE_APP_URL}/api/auth`,
	}),
	endpoints: (builder) => ({
		getToken: builder.mutation<Credentials, Auth>({
			query: (body) => ({
				url: `/login`,
				method: 'POST',
				body,
			}),
		}),
	}),
});

export const { useGetTokenMutation } = authApi;
