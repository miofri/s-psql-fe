import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';
import { RootState } from '../store';
export interface Blog {
	id: number;
	title: string;
	body: string;
	date: string;
	user_id: number;
	created_at: string;
}
export interface PostBlog {
	title: string;
	body: string;
	user_id: number;
}

export interface PutBlog {
	title: string;
	body: string;
	user_id: number;
}
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
	endpoints: (builder) => ({
		getBlogs: builder.query<Blog[], number>({
			query: (id) => `/post/${id}`,
		}),
		postBlog: builder.mutation<number, PostBlog>({
			query: (body) => ({
				url: `/post`,
				method: 'POST',
				body,
			}),
		}),
		deleteBlog: builder.mutation<number, { post_id: number }>({
			query: (body) => ({
				url: `/post`,
				method: 'DELETE',
				body,
			}),
		}),
		patchBlog: builder.mutation<
			number,
			{ title: string; body: string; post_id: number }
		>({
			query: (body) => ({
				url: `/post`,
				method: 'PATCH',
				body,
			}),
		}),
	}),
});

export const {
	useGetBlogsQuery,
	usePostBlogMutation,
	useDeleteBlogMutation,
	usePatchBlogMutation,
} = blogApi;
