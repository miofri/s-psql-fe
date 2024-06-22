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
		<div className="flex flex-col justify-center items-center min-w-[16vw] max-w-[40vw] p-8 bg-primary/30">
			<h1 className="mt-0 mb-4 mx-4 text-5xl text-wrap">{formTitle}</h1>
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
		</div>
	);
};
