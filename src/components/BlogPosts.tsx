import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import { RootState } from '../store/store';
import { useDeleteBlogMutation, useGetBlogsQuery } from '../store/rtk/blogApi';

export const BlogPosts = () => {
	const navigate = useNavigate();
	const user = useSelector((state: RootState) => state.auth);
	const { data } = useGetBlogsQuery(user.user.user_id);
	const [deletePost] = useDeleteBlogMutation();

	useEffect(() => {
		if (user.token === '') {
			navigate('/');
		}
	}, [user, navigate, data]);

	const handleUpdateClick = (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
		post_id: number
	) => {
		e.preventDefault();
		navigate(`/editpost/${post_id}`);
	};

	const handleDeleteClick = (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
		post_id: number
	) => {
		e.preventDefault();
		deletePost({ post_id: post_id });
	};

	const handleNewPost = () => {
		navigate('/newpost');
	};

	if (data) {
		return (
			<div>
				{data?.map((post) => (
					<article key={post.id}>
						<h1>{post.title}</h1>
						<p>{post.body}</p>
						<button
							type="button"
							onClick={(e) => handleUpdateClick(e, post.id)}
						>
							Update
						</button>
						<button
							type="submit"
							onClick={(e) => handleDeleteClick(e, post.id)}
						>
							Delete
						</button>
					</article>
				))}
				<button type="button" onClick={handleNewPost}>
					Create new blog post
				</button>
			</div>
		);
	}
	return <></>;
};
