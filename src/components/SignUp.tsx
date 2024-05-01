import React from 'react';
import { FormWrapper } from './reusable/FormWrapper';
import { InputForm } from './reusable/InputForm';
import * as AuthInterface from '../interfaces/Auth.interfaces';
import { useSignUpMutation } from '../store/rtk/api';
import { useNavigate } from 'react-router-dom';

export const SignUp = () => {
	const navigate = useNavigate();
	const [signup, { isLoading }] = useSignUpMutation();
	const [formState, setFormState] = React.useState<AuthInterface.Auth>({
		email: undefined,
		password: undefined,
	});

	const handleChange = ({
		target: { name, value },
	}: React.ChangeEvent<HTMLInputElement>) => {
		setFormState((prev) => ({ ...prev, [name]: value }));
	};
	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		await signup(formState).unwrap();
		navigate('/');
	};

	return (
		<div>
			<FormWrapper
				formTitle="Sign Up"
				buttonLabel="Register"
				buttonLoading="Registering..."
				handleSubmit={handleSubmit}
				isLoading={isLoading}
			>
				<InputForm
					label="Email"
					name="email"
					type="text"
					defaultValue=""
					bool={false}
					placeholder="firstname.lastname@mail.com"
					handleChange={handleChange}
				/>
				<InputForm
					label="Password"
					name="password"
					type="password"
					defaultValue=""
					placeholder="******"
					bool={false}
					handleChange={handleChange}
				/>
			</FormWrapper>
		</div>
	);
};
