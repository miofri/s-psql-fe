import styled from 'styled-components';

export const FormContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	min-width: 40rem;
	padding: 2rem;
	background-color: #363636;
	border-radius: 7px;
`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	gap: 2rem;

	button {
		margin-top: 2rem;
	}
`;

export const InputContainer = styled.div<{ $wider?: boolean }>`
	min-width: 30rem;
	display: flex;
	gap: 1rem;
`;
