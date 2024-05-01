import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import { RootState } from '../../store/store';
import { useDeleteBlogMutation, useGetBlogsQuery } from '../../store/rtk/api';
import * as Styled from '../../styles/styles';
import { Sidebar } from './Sidebar';

export const BlogPosts = () => {
	const navigate = useNavigate();
	const user = useSelector((state: RootState) => state.auth);
	const { data, isError } = useGetBlogsQuery(user.user.user_id);
	const [deletePost] = useDeleteBlogMutation();

	useEffect(() => {
		if (user.token === '' || isError) {
			navigate('/');
		}
	}, [user, navigate, data, isError]);

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

	const convertDate = (date: string) => {
		const newDate = new Date(parseInt(date)).toString().split(' ');
		const finalDate = newDate.slice(0, 5).join(' ');
		return finalDate;
	};

	if (data) {
		return (
			<Styled.Dashboard>
				<Sidebar email={user.user.email} handleNewPost={handleNewPost} />
				<Styled.Blogposts>
					<h1>Posts</h1>
					{data?.map((post) => (
						<Styled.Article key={post.id}>
							<h2>{post.title}</h2>
							<p>{post.body}</p>
							<Styled.ArticleDate>
								Posted on {convertDate(post.created_at)}
							</Styled.ArticleDate>
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
