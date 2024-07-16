import React, { ReactNode } from 'react';
import { Sidebar } from '../blogposts/Sidebar';
import { useNavigate } from 'react-router-dom';

interface Drawer {
	children: ReactNode;
}

export const Drawer: React.FC<Drawer> = ({ children }: Drawer) => {
	const navigate = useNavigate();
	const handleNewPost = () => {
		navigate('/newpost');
	};
	return (
		<div>
			<div className="drawer ">
				<input id="my-drawer" type="checkbox" className="drawer-toggle" />
				<div className="drawer-content">
					<div className="h-fit max-w-full m-0 sm:max-w-[50vw] flex flex-row flex-wrap sm:flex-nowrap">
						{children}
					</div>
				</div>
				<div className="drawer-side">
					<label
						htmlFor="my-drawer"
						aria-label="close sidebar"
						className="drawer-overlay"
					/>
					<Sidebar handleNewPost={handleNewPost} />
				</div>
			</div>
		</div>
	);
};
