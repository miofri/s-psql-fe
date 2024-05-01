import React, { ReactNode } from 'react';
import * as Styled from '../../styles/styles';
import { useNavigate } from 'react-router-dom';

interface FormWrapperInterface {
	formTitle: string;
	isLoading: boolean;
	buttonLabel: string;
	buttonLoading: string;
	children: ReactNode;
	handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
}

export const FormWrapper = ({
	children,
	formTitle,
	isLoading,
	buttonLabel,
	buttonLoading,
	handleSubmit,
}: FormWrapperInterface) => {
	const navigate = useNavigate();

	return (
		<Styled.SharedStyle.FormContainer>
			<h1>{formTitle}</h1>
			<Styled.SharedStyle.Form onSubmit={(e) => handleSubmit(e)}>
				{children}
				<Styled.SharedStyle.ButtonGroup>
					<button type="submit" disabled={isLoading}>
						{isLoading ? `${buttonLoading}` : `${buttonLabel}`}
					</button>
					<button type="button" onClick={() => navigate('/blog')}>
						Back
					</button>
				</Styled.SharedStyle.ButtonGroup>
			</Styled.SharedStyle.Form>
		</Styled.SharedStyle.FormContainer>
	);
};
