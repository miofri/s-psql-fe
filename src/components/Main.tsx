import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { useGetTokenMutation } from "../store/rtk/api";
import { setCredentials } from "../store/authSlice";
import * as AuthInterface from "../interfaces/Auth.interfaces";
import * as Styled from "../styles/styles";
import { InputForm } from "./reusable/InputForm";
import { handleInputChange } from "./utils";
//import { useDispatch } from 'react-redux';
//import { useNavigate } from 'react-router-dom';

export const Main = () => {
	const [login, { isLoading }] = useGetTokenMutation();
	const [formState, setFormState] = React.useState<AuthInterface.Auth>({
		email: undefined,
		password: undefined,
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
			navigate("/blog");
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} catch (error: any) {
			setToggleLoginError(true);
		}
	};

	return (
		<Styled.SharedStyle.FormContainer>
			<Styled.SharedStyle.CustomH1>Login</Styled.SharedStyle.CustomH1>
			<Styled.SharedStyle.Form onSubmit={(e) => handleSubmit(e)}>
				<InputForm
					label="Email"
					name="email"
					type="text"
					placeholder="firstname.lastname@mail.com"
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
					defaultValue={formState?.password}
					handleChange={(e) => handleInputChange(e, setFormState)}
				/>
				{toggleLoginError ? (
					<Styled.SharedStyle.ErrorText>
						Login credentials are incorrect
					</Styled.SharedStyle.ErrorText>
				) : (
					<></>
				)}
				<Styled.SharedStyle.ButtonGroup>
					<Styled.SharedStyle.LoginButton
						$nobg={false}
						type="submit"
						disabled={isLoading}
					>
						{isLoading ? `Logging in...` : `Log in`}
					</Styled.SharedStyle.LoginButton>
					<Styled.SharedStyle.LoginButton
						$nobg
						type="button"
						onClick={() => navigate("/signup")}
					>
						No account yet? <br />
						Sign up
					</Styled.SharedStyle.LoginButton>
				</Styled.SharedStyle.ButtonGroup>
			</Styled.SharedStyle.Form>
		</Styled.SharedStyle.FormContainer>
	);
};
