import styled from 'styled-components';

export const FormContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	min-width: 20rem;
	padding: 2rem;
	border-radius: 7px;
	border: #e4e4e4 1px solid;
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
	margin: 2rem auto;
	padding: 2rem;
	border: #e4e4e4 1px solid;
	border-radius: 7px;
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
	font-size: 0.875rem; /* Equivalent to Tailwind's text-sm */
	font-weight: 500; /* Equivalent to Tailwind's font-medium */
	color: #ffffff; /* Equivalent to Tailwind's text-gray-900 */
`;
export const Input = styled.input<{ $blogpost: boolean }>`
	width: ${(props) => (props.$blogpost ? '38rem' : '18rem')};
	padding: 0.625rem 1rem;
	font-size: 0.875rem; /* Equivalent to Tailwind's text-sm */
	color: #ffffff; /* Equivalent to Tailwind's dark:text-white */
	background-color: #374151; /* Equivalent to Tailwind's dark:bg-gray-700 */
	border-radius: 0.375rem; /* Equivalent to Tailwind's rounded-lg */
	border: 1px solid #4b5563; /* Equivalent to Tailwind's border */
	margin: 0;
`;

export const TextArea = styled.textarea`
	display: block;
	padding: 0.625rem 1rem; /* Equivalent to Tailwind's p-2.5 */
	width: 38rem; /* Equivalent to Tailwind's w-full */
	font-size: 0.875rem; /* Equivalent to Tailwind's text-sm */
	color: #fff; /* Equivalent to Tailwind's text-gray-900 */
	background-color: #374151; /* Equivalent to Tailwind's bg-gray-50 */
	border-radius: 0.375rem; /* Equivalent to Tailwind's rounded-lg */
	border: 1px solid #4b5563; /* Equivalent to Tailwind's border */
	&:focus {
		outline: none;
		border-color: #2563eb; /* Equivalent to Tailwind's focus:border-blue-500 */
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
	grid-template-columns: 30vw 66vw;
	width: 100vw;
`;

export const Sidebar = styled.div`
	background-color: #242424;
	height: 100vh;
	margin-right: 4vw;
	padding: 4rem;
`;

export const SidebarH1 = styled.h1`
	font-size: 2rem;
`;

export const Blogposts = styled.div``;
