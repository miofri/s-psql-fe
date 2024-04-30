import styled, { css } from 'styled-components';

const borderRadius = css`
	border-radius: 0.375rem;
`;

export const FormContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	min-width: 18rem;
	padding: 4rem;
	background-color: #272531;
	${borderRadius}
`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;

export const ChangePasswordForm = styled(Form)`
	margin: 1rem auto;
	padding: 2rem;
	background-color: #5c577a;
	${borderRadius}
`;

export const InputContainer = styled.div<{ $blogpost: boolean }>`
	min-width: ${(props) => (props.$blogpost ? '40rem' : '20rem')};
	display: flex;
	flex-direction: column;
	gap: 0.4rem;
`;

export const Article = styled.article`
	padding: 4rem;
	background-color: #272531;
	button {
		margin-right: 1rem;
	}
	${borderRadius}
`;

export const NavButtons = styled.nav`
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;
export const Label = styled.label`
	display: block;
	font-size: 0.875rem;
	font-weight: 500;
	color: #ffffff;
`;
export const Input = styled.input<{ $blogpost: boolean }>`
	width: ${(props) => (props.$blogpost ? '38rem' : '18rem')};
	padding: 0.625rem 1rem;
	font-size: 0.875rem;
	color: #ffffff;
	background-color: #374151;
	border: 1px solid #4b5563;
	margin: 0;
	${borderRadius}
`;

export const TextArea = styled.textarea`
	display: block;
	padding: 0.625rem 1rem;
	width: 38rem;
	font-size: 0.875rem;
	color: #fff;
	background-color: #374151;
	border: 1px solid #4b5563;
	&:focus {
		outline: none;
		border-color: #2563eb;
		box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.5);
	}
	${borderRadius}
`;

export const ButtonGroup = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin-top: 1rem;
	gap: 1rem;
`;

export const LoginButton = styled.button<{ $nobg: boolean }>`
	background-color: ${(props) => (props.$nobg ? 'transparent' : 'auto')};
`;

export const Dashboard = styled.div`
	display: grid;
	grid-template-columns: 20vw 70vw;
	gap: 4vw;
	width: 100vw;
	height: 100vh;
`;

export const Sidebar = styled.div`
	background-color: #272531;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
`;
export const SidebarContent = styled.div`
	width: 14vw;
	margin-top: 4rem;
`;

export const CustomH1 = styled.h1`
	font-size: 2rem;
`;

export const Blogposts = styled.div`
	margin-top: 5vh;
	display: flex;
	flex-direction: column;
	gap: 2rem;
	height: 90vh;
	overflow-y: scroll;
`;
