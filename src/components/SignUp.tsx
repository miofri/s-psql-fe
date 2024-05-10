import React, { useState } from "react";
import { FormWrapper } from "./reusable/FormWrapper";
import { InputForm } from "./reusable/InputForm";
import * as AuthInterface from "../interfaces/Auth.interfaces";
import { useSignUpMutation } from "../store/rtk/api";
import { useNavigate } from "react-router-dom";
import * as Styled from "../styles/styles";

export const SignUp = () => {
	const navigate = useNavigate();
	const [signup, { isLoading }] = useSignUpMutation();
	const [formState, setFormState] = React.useState<AuthInterface.Auth>({
		email: "",
		password: "",
		firstName: "",
		lastName: "",
	});
	const [toggleSignupError, setToggleSignupError] = useState<boolean>(false);

	const handleChange = ({
		target: { name, value },
	}: React.ChangeEvent<HTMLInputElement>) => {
		setFormState((prev) => ({ ...prev, [name]: value }));
	};
	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			await signup(formState).unwrap();
			setToggleSignupError(false);
			navigate("/");
		} catch (error) {
			setToggleSignupError(true);
		}
	};

	return (
		<FormWrapper
			formTitle="Sign Up"
			buttonLabel="Register"
			buttonLoading="Registering..."
			handleSubmit={handleSubmit}
			isLoading={isLoading}
		>
			<InputForm
				label="First name"
				name="firstName"
				type="text"
				defaultValue=""
				placeholder="John"
				bool={false}
				handleChange={handleChange}
			/>
			<InputForm
				label="Last name"
				name="lastName"
				type="text"
				defaultValue=""
				placeholder="Doe"
				bool={false}
				handleChange={handleChange}
			/>
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
			{toggleSignupError ? (
				<Styled.SharedStyle.ErrorText>
					Account exists!
				</Styled.SharedStyle.ErrorText>
			) : (
				<></>
			)}
		</FormWrapper>
	);
};
