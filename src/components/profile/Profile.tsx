import { useEffect, useRef, useState } from 'react';
import { RootState } from '../../store/store';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useChangePasswordMutation } from '../../store/rtk/api';
import * as AuthInterface from '../../interfaces/Auth.interfaces';
import { ChangePasswordForm } from './ChangePasswordForm';
import { ProfileAvatarBox } from './children/ProfileAvatarBox';
import { Drawer } from '../reusable/Drawer';

export const Profile = () => {
	const navigate = useNavigate();
	const user = useSelector((state: RootState) => state.auth);
	const [changePassword, { isLoading }] = useChangePasswordMutation();
	const [newPassword, setNewPassword] = useState<AuthInterface.Auth>({
		email: '',
		password: '',
		firstName: '',
		lastName: '',
	});
	const [changeStatus, setChangeStatus] = useState<string>('');
	const modalRef = useRef<HTMLDialogElement>(null);

	useEffect(() => {
		if (user.token === '') {
			navigate('/');
		}
		setNewPassword((prev) => ({
			...prev,
			email: user.user.email,
			firstName: user.user.firstName,
			lastName: user.user.lastName,
		}));
	}, [user, navigate]);

	const handleSubmitPassword = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			await changePassword(newPassword);
			setChangeStatus('Password changed successfully!');
			const timer = setTimeout(() => {
				setChangeStatus('');
			}, 10000);
			setNewPassword((prev) => ({ ...prev, password: '' }));
			modalRef.current?.close();
			return () => clearTimeout(timer);
		} catch (error) {
			setChangeStatus('Something went wrong...');
		}
	};
	const handleChange = ({
		target: { value },
	}: React.ChangeEvent<HTMLInputElement>) => {
		console.log(value);

		setNewPassword((prev) => ({ ...prev, password: value }));
	};
	return (
		<Drawer>
			<div className="flex flex-col items-start p-4 gap-4 h-screen justify-center">
				<div className="flex flex-row justify-between items-center w-full">
					<h1 className="text-5xl text-wrap">Profile</h1>
					<div>
						<label
							htmlFor="my-drawer"
							className="btn h-14 drawer-button  border-none bg-accent/70 hover:bg-accent/80 rounded-xl "
						>
							<span className="material-symbols-outlined white ">menu</span>
						</label>
					</div>
				</div>
				<div className="flex flex-col sm:flex-row bg-primary/20 rounded-lg overflow-hidden">
					<ProfileAvatarBox user={user} />
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
								onClick={() => modalRef.current?.showModal()}
							>
								Update password
							</button>
							<dialog id="changepw_modal" className="modal" ref={modalRef}>
								<div className="modal-box bg-[#152048] w-72">
									<form method="dialog">
										<button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
											✕
										</button>
									</form>
									<ChangePasswordForm
										handleSubmitPassword={handleSubmitPassword}
										handleChange={handleChange}
										isLoading={isLoading}
										newPw={newPassword.password}
									/>
								</div>
							</dialog>
							<button
								className="btn bg-primary bg-opacity-40 border-none hover:bg-accent/40 m-0"
								type="button"
								onClick={() => navigate('/blog')}
							>
								Back
							</button>
						</div>
						<p>{changeStatus}</p>
					</div>
				</div>
			</div>
		</Drawer>
	);
};
