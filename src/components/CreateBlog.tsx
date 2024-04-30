import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { usePostBlogMutation } from '../store/rtk/blogApi';
import { RootState } from '../store/store';
import * as Interface from '../interfaces/Blogs.interfaces';
import { FormWrapper } from './reusable/FormWrapper';
import { InputForm } from './reusable/InputForm';
import { TextArea } from './reusable/TextArea';
import { handleInputChange, handleTextAreaChange } from './utils';

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
		if (user.token === '') {
			navigate('/');
		}
		setFormState((prev) => ({ ...prev, user_id: user.user.user_id }));
	}, [user, navigate]);

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
					bool={true}
					label="Title"
					name="title"
					type="text"
					placeholder="Title"
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
