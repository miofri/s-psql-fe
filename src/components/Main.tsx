import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { useGetTokenMutation } from '../store/rtk/api';
import { setCredentials } from '../store/authSlice';
import * as AuthInterface from '../interfaces/Auth.interfaces';
import { InputForm } from './reusable/InputForm';
import { handleInputChange } from './utils';
import { Logo } from '../assets/test';

export const Main = () => {
	const [login, { isLoading }] = useGetTokenMutation();
	const [formState, setFormState] = React.useState<AuthInterface.Auth>({
		email: '',
		password: '',
		firstName: '',
		lastName: '',
	});
	const [toggleLoginError, setToggleLoginError] = useState<boolean>(false);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {}, [toggleLoginError]);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			const user = await login(formState).unwrap();
			dispatch(setCredentials(user));
			setToggleLoginError(false);
			navigate('/blog');
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} catch (error: any) {
			setToggleLoginError(true);
		}
	};

	return (
		<div className="h-screen flex justify-center items-center">
			<div className="flex flex-row w-screen justify-center sm:justify-evenly items-center  flex-wrap h-fit">
				<div
					className="max-w-[489px] min-w-[270px]
				max-h-[266px] flex-1 m-4"
				>
					<Logo />
				</div>
				<div className="flex flex-col justify-center items-center min-w-72 p-7 md:pb-7 bg-primary bg-opacity-30 rounded-md">
					<h1 className="text-5xl break-words my-4">Login</h1>
					<form
						className="flex flex-col gap-4"
						onSubmit={(e) => handleSubmit(e)}
					>
						<InputForm
							label="Email"
							name="email"
							type="text"
							placeholder="firstname.lastname@mail.com"
							defaultValue={formState?.email}
							handleChange={(e) => handleInputChange(e, setFormState)}
						/>
						<InputForm
							label="Password"
							name="password"
							type="password"
							placeholder="Enter password"
							defaultValue={formState?.password}
							handleChange={(e) => handleInputChange(e, setFormState)}
						/>
						{toggleLoginError ? (
							<p className="text-red-800 mb-0">
								Login credentials are incorrect
							</p>
						) : (
							<></>
						)}
						<div className="flex flex-col justify-center items-center sm:gap-1">
							<button
								className="btn btn-primary min-w-full p-0 m-0"
								type="submit"
								disabled={isLoading}
							>
								{isLoading ? `Logging in...` : `Log in`}
							</button>
							<button
								className="btn btn-link text-white/80 hover:text-accent/80 text-xs"
								type="button"
								onClick={() => navigate('/signup')}
							>
								No account yet? <br />
								Sign up
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};
