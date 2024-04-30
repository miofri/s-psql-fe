import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetBlogsQuery, usePatchBlogMutation } from '../store/rtk/blogApi';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { InputForm } from './reusable/InputForm';
import { FormWrapper } from './reusable/FormWrapper';
import * as Interface from '../interfaces/Blogs.interfaces';
import { handleInputChange, handleTextAreaChange } from './utils';
import { TextArea } from './reusable/TextArea';

export const PatchBlog = () => {
	const navigate = useNavigate();
	const user = useSelector((state: RootState) => state.auth);
	const { blogid } = useParams<{ blogid: string }>();
	const { data } = useGetBlogsQuery(user.user.user_id);
	const [patch, { isLoading }] = usePatchBlogMutation();
	const [formState, setFormState] = useState<Interface.PatchBlog>({
		title: '',
		body: '',
		post_id: 0,
	});

	useEffect(() => {
		if (user.token === '') {
			navigate('/');
		}
		if (data && blogid) {
			const findBlog = data.find(
				(blog: Interface.Blog) => blog.id === parseInt(blogid)
			);
			if (findBlog) {
				setFormState((prev) => ({
					...prev,
					title: findBlog.title,
					body: findBlog.body,
					post_id: parseInt(blogid),
				}));
			}
		}
	}, [data, blogid, navigate, user]);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		await patch(formState);
		navigate('/blog');
	};

	return (
		<>
			<FormWrapper
				formTitle="Edit Post"
				isLoading={isLoading}
				buttonLabel="Update post"
				buttonLoading="Updating post..."
				handleSubmit={handleSubmit}
			>
				<InputForm
					label="Title"
					name="title"
					type="text"
					placeholder="Title"
					bool={true}
					defaultValue={formState?.title}
					handleChange={(e) => handleInputChange(e, setFormState)}
				/>
				<TextArea
					label="Body"
					name="body"
					placeholder="Body"
					defaultValue={formState?.body}
					handleChange={(e) => handleTextAreaChange(e, setFormState)}
				/>
			</FormWrapper>
		</>
	);
};
