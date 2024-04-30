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
		<Styled.ChangePasswordForm onSubmit={(e) => handleSubmitPassword(e)}>
			<Styled.Label htmlFor="changePassword">Change Password</Styled.Label>
			<Styled.Input
				$blogpost={false}
				name="changePassword"
				type="password"
				id="changePassword"
				onChange={handleChange}
			/>
			<button type="submit" disabled={isLoading}>
				Submit
			</button>
		</Styled.ChangePasswordForm>
	);
};
