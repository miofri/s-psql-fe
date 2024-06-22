import { useEffect, useState } from 'react';
import { RootState } from '../../store/store';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useChangePasswordMutation } from '../../store/rtk/api';
import * as AuthInterface from '../../interfaces/Auth.interfaces';
import * as Styled from '../../styles/styles';
import { ChangePasswordForm } from './ChangePasswordForm';
import { CustomH1 } from '../reusable/elements/CustomH1';

export const Profile = () => {
	const navigate = useNavigate();
	const user = useSelector((state: RootState) => state.auth);
	const [changePassword, { isLoading }] = useChangePasswordMutation();
	const [toggleInput, setToggleInput] = useState<boolean>(false);
	const [newPassword, setNewPassword] = useState<AuthInterface.Auth>({
		email: '',
		password: '',
		firstName: '',
		lastName: '',
	});
	const [changeStatus, setChangeStatus] = useState<string>('');

	useEffect(() => {
		if (user.token === '') {
			navigate('/');
		}
		setNewPassword((prev) => ({ ...prev, email: user.user.email }));
	}, [user, navigate]);

	const handleSubmitPassword = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			await changePassword(newPassword);
			setChangeStatus('Password changed successfully!');
		} catch (error) {
			setChangeStatus('Something went wrong...');
		}
	};
	const handleChange = ({
		target: { value },
	}: React.ChangeEvent<HTMLInputElement>) => {
		setNewPassword((prev) => ({ ...prev, password: value }));
	};
	return (
		<div className="flex flex-col items-start p-4 gap-4">
			<CustomH1>Profile</CustomH1>
			<div className="flex flex-row bg-primary/20 rounded-lg overflow-hidden">
				<div className="flex flex-col items-center min-w-72 p-8 bg-gradient-to-tr from-indigo-950 to-accent/40 gap-3">
					<div className="avatar">
						<div className="rounded-full w-36">
							<img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
						</div>
					</div>
					<h2 className="text-2xl">
						{user.user.firstName} {user.user.lastName}
					</h2>
					<div className="flex flex-row min-w-full">
						<div className="flex flex-col flex-1 items-center">
							<h3 className="text-accent/60 text font-semibold text-sm">
								Posts
							</h3>
							<p>100</p>
						</div>
						<div className="flex flex-col flex-1 items-center">
							<h3 className="text-accent/60 text font-semibold text-sm">
								Followers
							</h3>
							<p>14</p>
						</div>
						<div className="flex flex-col flex-1 items-center">
							<h3 className="text-accent/60 text font-semibold text-sm">
								Following
							</h3>
							<p>20</p>
						</div>
					</div>
				</div>
				<div className="flex flex-col min-w-80 p-12 gap-6 justify-center">
					<div className="flex flex-col gap-2">
						<label className="block text-lg font-medium" htmlFor="email">
							Email
						</label>
						<input
							className="input py-2.5 px-4"
							required
							type="text"
							name="email"
							id="email"
							defaultValue={user.user.email}
							disabled
						/>
					</div>
					<div className="flex flex-row justify-between">
						<button
							className="btn btn-primary text-white m-0"
							type="submit"
							onClick={() => setToggleInput((prev) => !prev)}
						>
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
						{changeStatus ? <p>{changeStatus}</p> : <></>}
						<button
							className="btn bg-primary bg-opacity-40 border-none hover:bg-accent/40 m-0"
							type="button"
							onClick={() => navigate('/blog')}
						>
							Back
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
