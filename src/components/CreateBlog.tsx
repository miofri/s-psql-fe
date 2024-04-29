import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { usePostBlogMutation } from '../store/rtk/blogApi';
import { RootState } from '../store/store';
import * as Interface from '../interfaces/Blogs.interfaces';
import { FormWrapper } from './reusable/FormWrapper';
import { InputForm } from './reusable/InputForm';

export const CreateBlog = () => {
	const navigate = useNavigate();
	const user = useSelector((state: RootState) => state.auth);
	const [post, { isLoading }] = usePostBlogMutation();
	const [formState, setFormState] = useState<Interface.PostBlog>({
		title: 'Title',
		body: 'Body',
		user_id: 0,
	});

	useEffect(() => {
		setFormState((prev) => ({ ...prev, user_id: user.user.user_id }));
	}, [user]);

	const handleChange = ({
		target: { name, value },
	}: React.ChangeEvent<HTMLInputElement>) => {
		setFormState((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		await post(formState);
		navigate('/blog');
	};

	return (
		<>
			<FormWrapper
				formTitle="New Post"
				isLoading={isLoading}
				buttonLabel="Post"
				buttonLoading="Posting..."
				handleSubmit={handleSubmit}
			>
				<InputForm
					label="Title"
					name="title"
					type="text"
					defaultValue={formState?.title}
					handleChange={handleChange}
				/>
				<InputForm
					label="Body"
					name="body"
					type="text"
					defaultValue={formState?.body}
					handleChange={handleChange}
				/>
			</FormWrapper>
		</>
	);
};
