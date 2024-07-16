import React from 'react';

interface ChangePwInterface {
	handleSubmitPassword: (e: React.FormEvent<HTMLFormElement>) => void;
	handleChange: ({
		target: { value },
	}: React.ChangeEvent<HTMLInputElement>) => void;
	isLoading: boolean;
	newPw: string | undefined;
}

export const ChangePasswordForm = ({
	handleSubmitPassword,
	handleChange,
	isLoading,
	newPw,
}: ChangePwInterface) => {
	return (
		<form
			className="flex flex-col gap-2"
			onSubmit={(e) => handleSubmitPassword(e)}
		>
			<label
				className="rounded-md font-medium text-lg"
				htmlFor="changePassword"
			>
				Enter new password:
			</label>
			<input
				className="input w-full max-w-xs bg-gray-900"
				name="changePassword"
				type="password"
				id="changePassword"
				placeholder="Type here"
				value={newPw}
				onChange={handleChange}
			/>
			<button className="w-full" type="submit" disabled={isLoading}>
				Submit
			</button>
		</form>
	);
};
