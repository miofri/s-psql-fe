import React from 'react';
import { Auth, useGetTokenMutation } from '../store/rtk/authApi';
import { setCredentials } from '../store/rtk/authSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
//import { useDispatch } from 'react-redux';
//import { useNavigate } from 'react-router-dom';

export const Main = () => {
	const [login, { isLoading }] = useGetTokenMutation();
	const [formState, setFormState] = React.useState<Auth>({
		email: undefined,
		password: undefined,
	});
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleChange = ({
		target: { name, value },
	}: React.ChangeEvent<HTMLInputElement>) => {
		setFormState((prev) => ({ ...prev, [name]: value }));
		console.log(formState);
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const user = await login(formState).unwrap();
		dispatch(setCredentials(user));
		navigate('/blog');
	};

	return (
		<>
			<h1>Login to BlogApp</h1>
			<form
				onSubmit={(e) => {
					handleSubmit(e);
				}}
			>
				<label htmlFor="email">Email</label>
				<input
					type="email"
					name="email"
					id="email"
					placeholder="admin@mail.com"
					onChange={handleChange}
				/>
				<label htmlFor="password">Password</label>
				<input
					type="password"
					name="password"
					id="password"
					onChange={handleChange}
				/>
				<button type="submit" disabled={isLoading}>
					{isLoading ? 'Logging in...' : 'Log in'}
				</button>
			</form>
		</>
	);
};
