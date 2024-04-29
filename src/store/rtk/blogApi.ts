import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';

import { RootState } from '../store';
import * as BlogInterface from '../../interfaces/Blogs.interfaces';

export const blogApi = createApi({
	reducerPath: 'blogsApi',
	baseQuery: retry(
		fetchBaseQuery({
			baseUrl: `${import.meta.env.VITE_APP_URL}/api/blogs`,
			prepareHeaders: (headers, { getState }) => {
				const token = (getState() as RootState).auth.token;
				if (token) {
					headers.set('authorization', `Bearer ${token}`);
				}
			},
		}),
		{ maxRetries: 10 }
	),
	tagTypes: ['Blogs'],
	endpoints: (builder) => ({
		getBlogs: builder.query<BlogInterface.Blog[], number>({
			query: (id) => `/post/${id}`,
			providesTags: ['Blogs'],
		}),
		postBlog: builder.mutation<
			BlogInterface.JSONMessage,
			BlogInterface.PostBlog
		>({
			query: (body) => ({
				url: `/post`,
				method: 'POST',
				body,
			}),
			invalidatesTags: ['Blogs'],
		}),
		deleteBlog: builder.mutation<
			BlogInterface.JSONMessage,
			{ post_id: number }
		>({
			query: (body) => ({
				url: `/post`,
				method: 'DELETE',
				body,
			}),
			invalidatesTags: ['Blogs'],
		}),
		patchBlog: builder.mutation<
			BlogInterface.JSONMessage,
			BlogInterface.PatchBlog
		>({
			query: (body) => ({
				url: `/post`,
				method: 'PATCH',
				body,
			}),
			invalidatesTags: ['Blogs'],
		}),
	}),
});

export const {
	useGetBlogsQuery,
	usePostBlogMutation,
	useDeleteBlogMutation,
	usePatchBlogMutation,
} = blogApi;
