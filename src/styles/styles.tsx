import styled from 'styled-components';

export const FormContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	min-width: 40rem;
	padding: 2rem;
	border-radius: 7px;
	border: #e4e4e4 1px solid;
`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;

export const InputContainer = styled.div<{ $wider?: boolean }>`
	min-width: 30rem;
	display: flex;
	gap: 1rem;
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
	gap: 1rem;
`;
