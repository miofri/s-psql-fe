import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import { RootState } from '../store/store';
import { useDeleteBlogMutation, useGetBlogsQuery } from '../store/rtk/blogApi';
import * as Styled from '../styles/styles';

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
			<Styled.Dashboard>
				<Styled.Sidebar>
					<Styled.SidebarContent>
						<Styled.SidebarH1>Welcome, {user.user.email}</Styled.SidebarH1>
						<Styled.NavButtons role="navigation">
							<button type="button" onClick={handleNewPost}>
								Create new blog post
							</button>
							<button type="button" onClick={() => navigate('/profile')}>
								Profile
							</button>
						</Styled.NavButtons>
					</Styled.SidebarContent>
				</Styled.Sidebar>
				<Styled.Blogposts>
					{data?.map((post) => (
						<Styled.Article key={post.id}>
							<h2>{post.title}</h2>
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
						</Styled.Article>
					))}
				</Styled.Blogposts>
			</Styled.Dashboard>
		);
	}
	return <></>;
};
