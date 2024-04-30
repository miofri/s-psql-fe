import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { useGetTokenMutation } from '../store/rtk/authApi';
import { setCredentials } from '../store/authSlice';
import * as AuthInterface from '../interfaces/Auth.interfaces';
import * as Styled from '../styles/styles';
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
		<Styled.FormContainer>
			<h1>Login</h1>
			<Styled.Form onSubmit={(e) => handleSubmit(e)}>
				<InputForm
					label="Email"
					name="email"
					type="text"
					placeholder="admin@mail.com"
					bool={false}
					defaultValue={formState?.email}
					handleChange={(e) => handleInputChange(e, setFormState)}
				/>
				<InputForm
					label="Password"
					name="password"
					type="password"
					placeholder="Enter password"
					bool={false}
					defaultValue={formState?.email}
					handleChange={(e) => handleInputChange(e, setFormState)}
				/>
				<Styled.LoginButtonGroup>
					<Styled.LoginButton $nobg={false} type="submit" disabled={isLoading}>
						{isLoading ? `Logging in...` : `Log in`}
					</Styled.LoginButton>
					<Styled.LoginButton
						$nobg
						type="button"
						onClick={() => navigate('/signup')}
					>
						No account yet? Sign Up
					</Styled.LoginButton>
				</Styled.LoginButtonGroup>
			</Styled.Form>
		</Styled.FormContainer>
	);
};
