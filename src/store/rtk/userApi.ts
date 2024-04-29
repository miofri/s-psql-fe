import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import * as BlogInterface from '../../interfaces/Blogs.interfaces';
import * as AuthInterface from '../../interfaces/Auth.interfaces';

export const userApi = createApi({
	reducerPath: 'userApi',
	baseQuery: fetchBaseQuery({
		baseUrl: `${import.meta.env.VITE_APP_URL}/api/users`,
	}),
	endpoints: (builder) => ({
		signUp: builder.mutation<BlogInterface.JSONMessage, AuthInterface.Auth>({
			query: (body) => ({
				url: '/signup',
				method: 'POST',
				body,
			}),
		}),

		changePassword: builder.mutation<
			BlogInterface.JSONMessage,
			AuthInterface.Auth
		>({
			query: (body) => ({
				url: '/changepassword',
				method: 'POST',
				body,
			}),
		}),
	}),
});

export const { useSignUpMutation, useChangePasswordMutation } = userApi;
