import React, { ReactNode } from 'react';
import * as Styled from '../../styles/styles';

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
	return (
		<Styled.FormContainer>
			<h1>{formTitle}</h1>
			<Styled.Form onSubmit={(e) => handleSubmit(e)}>
				{children}
				<button type="submit" disabled={isLoading}>
					{isLoading ? `${buttonLoading}` : `${buttonLabel}`}
				</button>
			</Styled.Form>
		</Styled.FormContainer>
	);
};
