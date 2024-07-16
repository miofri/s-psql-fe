import React, { ReactNode } from 'react';
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
		<div className="flex flex-col justify-center items-center min-w-[40vw] max-w-[80vw] h-fit p-8 bg-primary/30 rounded-md">
			<h1 className="mt-0 mb-4 mx-4 text-5xl text-wrap">{formTitle}</h1>
			<form
				className="flex flex-col gap-4 w-full"
				onSubmit={(e) => handleSubmit(e)}
			>
				{children}
				<div className="flex flex-row justify-center items-center mt-4 gap-2 sm:gap-4">
					<button
						className="hover:bg-primary/70 w-fit flex-auto m-0"
						type="submit"
						disabled={isLoading}
					>
						{isLoading ? `${buttonLoading}` : `${buttonLabel}`}
					</button>
					<button
						className="btn border-none bg-accent/40 hover:bg-accent/80 w-fit flex-auto m-0"
						type="button"
						onClick={() => navigate('/blog')}
					>
						Back
					</button>
				</div>
			</form>
		</div>
	);
};
