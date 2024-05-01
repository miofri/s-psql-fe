import styled from "styled-components";
import { device } from "./breakpoints";

export const borderRadius = "0.375rem";

export const FormContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	min-width: 16vw;
	max-width: 40vw;
	padding: 4rem;
	background-color: #272531;
	border-radius: ${borderRadius};
`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;

export const ChangePasswordForm = styled(Form)`
	margin: 1rem auto;
	padding: 2rem;
	background-color: #302946;
	border-radius: ${borderRadius};
`;

export const Label = styled.label`
	display: block;
	font-size: 0.875rem;
	font-weight: 500;
	color: #ffffff;
`;

export const InputContainer = styled.div<{ $blogpost: boolean }>`
	width: ${(props) => (props.$blogpost ? "36vw" : "100%")};
	max-width: 54vw;
	display: flex;
	flex-direction: column;
	gap: 0.4rem;
`;

export const Input = styled.input`
	max-width: 100%;
	padding: 0.625rem 1rem;
	font-size: 0.875rem;
	color: #ffffff;
	background-color: #374151;
	border: 1px solid #4b5563;
	margin: 0;
	border-radius: ${borderRadius};
`;

export const TextArea = styled.textarea`
	display: block;
	padding: 0.625rem 1rem;
	font-size: 0.875rem;
	color: #fff;
	background-color: #374151;
	border: 1px solid #4b5563;
	&:focus {
		outline: none;
		border-color: #2563eb;
		box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.5);
	}
	border-radius: ${borderRadius};
`;

export const ButtonGroup = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin-top: 1rem;
	gap: 1rem;
`;

export const LoginButton = styled.button<{ $nobg: boolean }>`
	background-color: ${(props) => (props.$nobg ? "transparent" : "auto")};
	transition: 0.5s;
	&:focus,
	&:hover {
		border-color: ${(props) => (props.$nobg ? "transparent" : "auto")};
		color: ${(props) => (props.$nobg ? "#bebbe6" : "#ffffff")};
	}
`;

export const ErrorText = styled.p`
	text-align: center;
	margin-bottom: 0;
	color: #c45f5f;
`;

export const CustomH1 = styled.h1`
	margin: 0 2vw 0;
	font-size: 1.8rem;
	overflow: wrap;
	@media ${device.xs} {
		font-size: 2rem;
	}
	@media ${device.md} {
		font-size: 3rem;
	}
`;

export const CustomH2 = styled.h2`
	margin: 0;
	font-size: 1.1rem;
	@media ${device.sm} {
		font-size: 1.4rem;
	}
	@media ${device.xl} {
		font-size: 1.6rem;
	}
`;

export const ProfileContainer = styled.div`
	max-width: 60vw;
	text-align: center;
`;
