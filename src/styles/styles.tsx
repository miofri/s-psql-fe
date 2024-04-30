import styled from 'styled-components';

export const FormContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	min-width: 20rem;
	padding: 2rem;
	border-radius: 0.375rem;
	background-color: #272531;
`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	gap: 1rem;
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
	/*border: #e4e4e4 1px solid;*/
	border-radius: 0.375rem;
	button {
		margin-right: 1rem;
	}
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
	border-radius: 0.375rem75rem;
	border: 1px solid #4b5563;
	margin: 0;
`;

export const TextArea = styled.textarea`
	display: block;
	padding: 0.625rem 1rem;
	width: 38rem;
	font-size: 0.875rem;
	color: #fff;
	background-color: #374151;
	border-radius: 0.375rem75rem;
	border: 1px solid #4b5563;
	&:focus {
		outline: none;
		border-color: #2563eb;
		box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.5);
	}
`;

export const LoginButtonGroup = styled.div`
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
	grid-template-columns: 20vw 80vw;
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

export const SidebarH1 = styled.h1`
	font-size: 2rem;
`;

export const Blogposts = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	padding: 4rem;
	height: 86vh;
	overflow-y: scroll;
`;
