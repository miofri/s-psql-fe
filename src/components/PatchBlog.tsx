import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
	Blog,
	useGetBlogsQuery,
	usePatchBlogMutation,
} from '../store/rtk/blogApi';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

interface PatchBlog {
	title: string;
	body: string;
	post_id: number;
}

export const PatchBlog = () => {
	const navigate = useNavigate();
	const { blogid } = useParams<{ blogid: string }>();
	const user = useSelector((state: RootState) => state.auth);
	const { data, isLoading } = useGetBlogsQuery(user.user.user_id);
	const [patch] = usePatchBlogMutation();
	const [blogToEdit, setBlogToEdit] = useState<Blog>();
	const [formState, setFormState] = useState<PatchBlog>({
		title: '',
		body: '',
		post_id: 0,
	});

	useEffect(() => {
		if (data && blogid) {
			const findBlog = data.find((blog: Blog) => blog.id === parseInt(blogid));
			setBlogToEdit(findBlog);
		}
	}, [data, blogid]);

	const handleChange = ({
		target: { name, value },
	}: React.ChangeEvent<HTMLInputElement>) => {
		setFormState((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = async () => {
		await patch(formState);
		navigate('/blog');
	};

	return (
		<>
			<h1>Edit post</h1>
			<form onSubmit={handleSubmit}>
				<label htmlFor="title">Title</label>
				<input
					type="text"
					name="title"
					id="title"
					defaultValue={blogToEdit?.title}
					onChange={handleChange}
				/>
				<label htmlFor="body">Body</label>
				<input
					type="body"
					name="body"
					id="body"
					defaultValue={blogToEdit?.body}
					onChange={handleChange}
				/>
				<button type="submit" disabled={isLoading}>
					{isLoading ? 'Logging in...' : 'Log in'}
				</button>
			</form>
		</>
	);
};
