import React from 'react';
import { useGetBlogsQuery } from '../store/rtk/blogApi';

export const Main = () => {
	const { data } = useGetBlogsQuery(1);
	if (data) {
		return (
			<div>
				{data?.map((blog) => (
					<article>
						<h1>{blog.title}</h1>
						<p>{blog.body}</p>
					</article>
				))}
			</div>
		);
	}
	return <></>;
};
