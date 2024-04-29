import { useGetBlogsQuery } from '../store/rtk/blogApi';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export const BlogPosts = () => {
	const navigate = useNavigate();
	const user = useSelector((state: RootState) => state.auth);
	const { data } = useGetBlogsQuery(user.user.user_id);

	useEffect(() => {
		if (user.token === '') {
			navigate('/');
		}
	}, [user, navigate]);

	if (data) {
		return (
			<div>
				{data?.map((blog) => (
					<article key={blog.id}>
						<h1>{blog.title}</h1>
						<p>{blog.body}</p>
						<button type="button">Update</button>
						<button type="submit">Delete</button>
					</article>
				))}
			</div>
		);
	}
	return <></>;
};
