import { useEffect, useState } from 'react';
import { RootState } from '../../store/store';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useChangePasswordMutation } from '../../store/rtk/api';
import * as AuthInterface from '../../interfaces/Auth.interfaces';
import * as Styled from '../../styles/styles';
import { ChangePasswordForm } from './ChangePasswordForm';

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
		<Styled.SharedStyle.FormContainer>
			<Styled.SharedStyle.ProfileContainer>
				<Styled.SharedStyle.CustomH1>Profile</Styled.SharedStyle.CustomH1>
				<p>Email: {user.user.email}</p>
				<button type="submit" onClick={() => setToggleInput((prev) => !prev)}>
					{toggleInput ? 'Cancel' : 'Change password'}
				</button>
				{toggleInput ? (
					<ChangePasswordForm
						handleSubmitPassword={handleSubmitPassword}
						handleChange={handleChange}
						isLoading={isLoading}
					/>
				) : (
					<></>
				)}
				<button type="button" onClick={() => navigate('/blog')}>
					Back
				</button>
			</Styled.SharedStyle.ProfileContainer>
		</Styled.SharedStyle.FormContainer>
	);
};
