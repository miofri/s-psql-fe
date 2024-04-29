import { useEffect, useState } from 'react';
import { RootState } from '../store/store';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useChangePasswordMutation } from '../store/rtk/userApi';
import * as AuthInterface from '../interfaces/Auth.interfaces';

export const Profile = () => {
	const navigate = useNavigate();
	const user = useSelector((state: RootState) => state.auth);
	const [changePassword, { isLoading }] = useChangePasswordMutation();
	const [toggleInput, setToggleInput] = useState<boolean>(false);
	const [newPassword, setNewPassword] = useState<AuthInterface.Auth>({
		email: '',
		password: '',
	});

	useEffect(() => {
		if (user.token === '') {
			navigate('/');
		}
		setNewPassword((prev) => ({ ...prev, email: user.user.email }));
	}, [user, navigate]);

	const handleSubmitPassword = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		changePassword(newPassword);
	};
	const handleChange = ({
		target: { value },
	}: React.ChangeEvent<HTMLInputElement>) => {
		setNewPassword((prev) => ({ ...prev, password: value }));
	};
	return (
		<div>
			<h1>Profile</h1>
			<h2>Email: {user.user.email}</h2>
			<button type="submit" onClick={() => setToggleInput((prev) => !prev)}>
				Change password
			</button>
			{toggleInput ? (
				<form onSubmit={(e) => handleSubmitPassword(e)}>
					<label htmlFor="changePassword">Change Password</label>
					<input
						name="changePassword"
						type="password"
						id="changePassword"
						onChange={handleChange}
					/>
					<button type="submit" disabled={isLoading}>
						Submit
					</button>
				</form>
			) : (
				<></>
			)}
		</div>
	);
};
