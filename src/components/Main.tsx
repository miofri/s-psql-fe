import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { useGetTokenMutation } from '../store/rtk/authApi';
import { setCredentials } from '../store/rtk/authSlice';
import * as AuthInterface from '../interfaces/Auth.interfaces';
import { FormWrapper } from './reusable/FormWrapper';
import { InputForm } from './reusable/InputForm';
import { handleInputChange } from './utils';
//import { useDispatch } from 'react-redux';
//import { useNavigate } from 'react-router-dom';

export const Main = () => {
	const [login, { isLoading }] = useGetTokenMutation();
	const [formState, setFormState] = React.useState<AuthInterface.Auth>({
		email: undefined,
		password: undefined,
	});
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const user = await login(formState).unwrap();
		dispatch(setCredentials(user));
		navigate('/blog');
	};

	return (
		<>
			<FormWrapper
				formTitle="Login to BlogApp"
				isLoading={isLoading}
				buttonLabel="Login"
				buttonLoading="Logging in..."
				handleSubmit={handleSubmit}
			>
				<InputForm
					label="Email"
					name="email"
					type="text"
					placeholder="admin@mail.com"
					defaultValue={formState?.email}
					handleChange={(e) => handleInputChange(e, setFormState)}
				/>
				<InputForm
					label="Password"
					name="password"
					type="password"
					placeholder="Enter password"
					defaultValue={formState?.email}
					handleChange={(e) => handleInputChange(e, setFormState)}
				/>
			</FormWrapper>
			<button type="button" onClick={() => navigate('/signup')}>
				Sign Up
			</button>
		</>
	);
};
