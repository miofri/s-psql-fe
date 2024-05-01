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
		<Styled.SharedStyle.ChangePasswordForm
			onSubmit={(e) => handleSubmitPassword(e)}
		>
			<Styled.SharedStyle.Label htmlFor="changePassword">
				Change Password
			</Styled.SharedStyle.Label>
			<Styled.SharedStyle.Input
				name="changePassword"
				type="password"
				id="changePassword"
				onChange={handleChange}
			/>
			<button type="submit" disabled={isLoading}>
				Submit
			</button>
		</Styled.SharedStyle.ChangePasswordForm>
	);
};
