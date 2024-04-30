import styled, { css } from 'styled-components';
import { device } from './breakpoints';

const borderRadius = css`
	border-radius: 0.375rem;
`;

export const FormContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	min-width: 14vw;
	max-width: 40vw;
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
	background-color: #302946;
	${borderRadius}
`;

export const InputContainer = styled.div<{ $blogpost: boolean }>`
	width: ${(props) => (props.$blogpost ? '36vw' : '100%')};
	max-width: 54vw;
	display: flex;
	flex-direction: column;
	gap: 0.4rem;
`;

export const Article = styled.article`
	padding: 4rem;
	background-color: #272531;
	margin: auto 2vw;

	${borderRadius}
	@media ${device.md} {
		margin-right: 2vh;
	}
`;

export const ArticleDate = styled.p`
	color: #a7a7a7;
	font-size: 0.8rem;
`;

export const NavButtonsGroup = styled.nav`
	font-size: 0.8rem;
	flex-direction: row;
	display: flex;
	@media ${device.lg} {
		width: 100%;
		flex-direction: column;
		align-items: flex-start;
		font-size: 1rem;
	}
`;

export const NavButton = styled.button`
	display: flex;
	justify-content: center;
	gap: 0.4rem;
	padding: 0;
	font-size: 0.8rem;
	background-color: transparent;
	transition: color 0.2s;
	text-align: left;
	&:hover {
		border: 1px solid transparent;
		color: #bebbe6;
	}
`;
export const Label = styled.label`
	display: block;
	font-size: 0.875rem;
	font-weight: 500;
	color: #ffffff;
`;
export const Input = styled.input<{ $blogpost: boolean }>`
	max-width: 100%;
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
	transition: 0.5s;
	&:focus,
	&:hover {
		border-color: ${(props) => (props.$nobg ? 'transparent' : 'auto')};
		color: ${(props) => (props.$nobg ? '#bebbe6' : '#ffffff')};
	}
`;

export const ErrorText = styled.p`
	text-align: center;
	margin-bottom: 0;
	color: #c45f5f;
`;

export const Dashboard = styled.div`
	display: grid;
	grid-template-rows: 20vw 70vw;
	gap: 8vh;
	width: 100vw;
	height: 100vh;
	@media ${device.lg} {
		grid-template-columns: 18vw 70vw;
		gap: 2vw;
	}
`;

export const Sidebar = styled.div`
	background-color: #272531;
	min-height: 18vh;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	@media ${device.lg} {
		align-items: flex-start;
		height: 100vh;
		${borderRadius};
	}
`;
export const SidebarContent = styled.div`
	width: 70vw;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	@media ${device.lg} {
		justify-content: flex-start;
		width: 12vw;
		margin-top: 4rem;
	}
`;
export const CustomH1 = styled.h1`
	font-size: 1.4rem;
	overflow: wrap;
`;
export const Blogposts = styled.div`
	/*padding: 3vh;*/
	display: flex;
	flex-direction: column;
	gap: 2rem;
	height: 76vh;
	overflow-y: scroll;
	@media ${device.md} {
		margin-top: 2vh;
		flex-direction: column;
		height: 94vh;
	}

	h1 {
		margin: auto 2vw;
	}
`;
