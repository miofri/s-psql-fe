import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { usePostBlogMutation } from '../../store/rtk/api';
import { RootState, persistor } from '../../store/store';
import * as Interface from '../../interfaces/Blogs.interfaces';
import { FormWrapper } from '../reusable/FormWrapper';
import { InputForm } from '../reusable/InputForm';
import { TextArea } from '../reusable/TextArea';
import { handleInputChange, handleTextAreaChange } from '../utils';
import { authSlice } from '../../store/authSlice';
import { TagInput } from './TagInput';

export const CreateBlog = () => {
	const [tags, setTags] = useState<string[]>([]);
	const [tagInput, setTagInput] = useState<string>('');
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const user = useSelector((state: RootState) => state.auth);
	const [post, { isLoading }] = usePostBlogMutation();
	const [formState, setFormState] = useState<Interface.PostBlog>({
		title: 'Title',
		body: 'Body',
		sub: '',
		tags: [],
	});

	useEffect(() => {
		if (user.token === '') {
			navigate('/');
		}
		setFormState((prev) => ({ ...prev, sub: user.user.sub }));
	}, [user, navigate]);

	useEffect(() => {
		setFormState((prev) => ({ ...prev, tags }));
	}, [tags]);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			await post(formState).unwrap();
			navigate('/blog');
		} catch (error) {
			dispatch(authSlice.actions.clearCredentials());
			persistor.purge();
			navigate('/');
		}
	};
	return (
		<div className="min-h-screen flex justify-center items-center w-screen">
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
					placeholder="Title"
					defaultValue=""
					handleChange={(e) => handleInputChange(e, setFormState)}
				/>
				<TextArea
					label="Body"
					name="body"
					placeholder="Body"
					defaultValue=""
					handleChange={(e) => handleTextAreaChange(e, setFormState)}
				/>
				<TagInput
					tags={tags}
					setTags={setTags}
					tagInput={tagInput}
					setTagInput={setTagInput}
				/>
			</FormWrapper>
		</div>
	);
};
