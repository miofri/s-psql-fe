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
		<Styled.FormContainer>
			<h1>{formTitle}</h1>
			<Styled.Form onSubmit={(e) => handleSubmit(e)}>
				{children}
				<Styled.ButtonGroup>
					<button type="submit" disabled={isLoading}>
						{isLoading ? `${buttonLoading}` : `${buttonLabel}`}
					</button>
					<button type="button" onClick={() => navigate('/blog')}>
						Back
					</button>
				</Styled.ButtonGroup>
			</Styled.Form>
		</Styled.FormContainer>
	);
};
