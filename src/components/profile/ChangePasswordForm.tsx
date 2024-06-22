import React from 'react';
import * as Styled from '../../styles/styles';

interface ChangePwInterface {
	handleSubmitPassword: (e: React.FormEvent<HTMLFormElement>) => void;
	handleChange: ({
		target: { value },
	}: React.ChangeEvent<HTMLInputElement>) => void;
	isLoading: boolean;
}

export const ChangePasswordForm = ({
	handleSubmitPassword,
	handleChange,
	isLoading,
}: ChangePwInterface) => {
	return (
		<form
			className="flex flex-col gap-2"
			onSubmit={(e) => handleSubmitPassword(e)}
		>
			<label className="text-lg p-4 rounded-md" htmlFor="changePassword">
				Change Password
			</label>
			<input
				className="max-w-max px-4 py-2 text-white"
				name="changePassword"
				type="password"
				id="changePassword"
				onChange={handleChange}
			/>
			<button type="submit" disabled={isLoading}>
				Submit
			</button>
		</form>
	);
};
