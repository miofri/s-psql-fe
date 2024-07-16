import { PersistPartial } from 'redux-persist/lib/persistReducer';
import { Credentials } from '../../../interfaces/Auth.interfaces';
import React from 'react';

interface ProfileAvatarBox {
	user: Credentials & PersistPartial;
}

export const ProfileAvatarBox: React.FC<ProfileAvatarBox> = ({
	user,
}: ProfileAvatarBox) => {
	return (
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
					<h3 className="text-accent/60 text font-semibold text-sm">Posts</h3>
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
	);
};
