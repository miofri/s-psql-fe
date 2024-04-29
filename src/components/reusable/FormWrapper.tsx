import React, { ReactNode } from 'react';

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
		<>
			<h1>{formTitle}</h1>
			<form onSubmit={(e) => handleSubmit(e)}>
				{children}
				<button type="submit" disabled={isLoading}>
					{isLoading ? `${buttonLoading}` : `${buttonLabel}`}
				</button>
			</form>
		</>
	);
};
