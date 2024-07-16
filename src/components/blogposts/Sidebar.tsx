import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authSlice } from '../../store/authSlice';
import { persistor } from '../../store/store';

interface SidebarInterface {
	handleNewPost: () => void;
}

export const Sidebar = ({ handleNewPost }: SidebarInterface) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const handleLogout = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.preventDefault();
		dispatch(authSlice.actions.clearCredentials());
		persistor.purge();
		navigate('/');
	};
	return (
		<nav className="w-fit h-screen p-4 bg-sidebar text-left">
			<ul className="menu rounded-md h-fit">
				<li>
					<button className="btn justify-start text-accent hover:text-accent hover:bg-primary/30 border-none ">
						<span className="material-symbols-outlined">home</span>
						Home
					</button>
				</li>
				<li>
					<button
						className="btn justify-start text-accent hover:text-accent hover:bg-primary/30 border-none "
						data-tip="Profile"
						type="button"
						onClick={() => navigate('/profile')}
					>
						<span className="material-symbols-outlined">person</span>Profile
					</button>
				</li>
				<li>
					<button
						className="btn justify-start text-accent hover:text-accent hover:bg-primary/30 border-none"
						data-tip="Create post"
						type="button"
						onClick={handleNewPost}
					>
						<span className="material-symbols-outlined">post_add</span>Create
						post
					</button>
				</li>
				<li>
					<button
						className="btn justify-start text-accent hover:text-accent hover:bg-primary/30  border-none "
						data-tip="Log out"
						type="button"
						onClick={(e) => handleLogout(e)}
					>
						<span className="material-symbols-outlined">logout</span>Log out
					</button>
				</li>
			</ul>
		</nav>
	);
};
