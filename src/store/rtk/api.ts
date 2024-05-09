import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";
import * as AuthInterface from "../../interfaces/Auth.interfaces";
import { RootState } from "../store";
import * as BlogInterface from "../../interfaces/Blogs.interfaces";
import { sort_blogs_by_date_newest } from "./api.utils";

export const api = createApi({
	reducerPath: "authApi",
	baseQuery: retry(
		fetchBaseQuery({
			baseUrl: `${import.meta.env.VITE_APP_URL}`,
			prepareHeaders: (headers, { getState }) => {
				const token = (getState() as RootState).auth.token;
				if (token) {
					headers.set("authorization", `Bearer ${token}`);
				}
			},
		}),
		{ maxRetries: 1 },
	),
	tagTypes: ["Blogs"],
	endpoints: (builder) => ({
		getToken: builder.mutation<AuthInterface.Credentials, AuthInterface.Auth>({
			query: (body) => ({
				url: `auth/login`,
				method: "POST",
				body,
			}),
		}),
		getBlogs: builder.query<BlogInterface.Blog[], string>({
			query: (id) => `blogs/post/${id}`,
			transformResponse: (response: BlogInterface.Blog[]) => {
				const result = sort_blogs_by_date_newest(response);
				return result;
			},
			providesTags: ["Blogs"],
		}),
		postBlog: builder.mutation<
			BlogInterface.JSONMessage,
			BlogInterface.PostBlog
		>({
			query: (body) => ({
				url: `blogs/post`,
				method: "POST",
				body,
			}),
			invalidatesTags: ["Blogs"],
		}),
		deleteBlog: builder.mutation<
			BlogInterface.JSONMessage,
			{ post_id: number }
		>({
			query: (body) => ({
				url: `blogs/post`,
				method: "DELETE",
				body,
			}),
			invalidatesTags: ["Blogs"],
		}),
		patchBlog: builder.mutation<
			BlogInterface.JSONMessage,
			BlogInterface.PatchBlog
		>({
			query: (body) => ({
				url: `blogs/post`,
				method: "PATCH",
				body,
			}),
			invalidatesTags: ["Blogs"],
		}),
		signUp: builder.mutation<BlogInterface.JSONMessage, AuthInterface.Auth>({
			query: (body) => ({
				url: "users/signup",
				method: "POST",
				body,
			}),
		}),

		changePassword: builder.mutation<
			BlogInterface.JSONMessage,
			AuthInterface.Auth
		>({
			query: (body) => ({
				url: "users/changepassword",
				method: "PATCH",
				body,
			}),
		}),
	}),
});

export const {
	useGetTokenMutation,
	useGetBlogsQuery,
	usePostBlogMutation,
	useDeleteBlogMutation,
	usePatchBlogMutation,
	useSignUpMutation,
	useChangePasswordMutation,
} = api;
