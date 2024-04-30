import { useDispatch } from 'react-redux';
import * as Styled from '../../styles/styles';
import { useNavigate } from 'react-router-dom';
import { authSlice } from '../../store/authSlice';
import { persistor } from '../../store/store';

interface SidebarInterface {
	email: string;
	handleNewPost: () => void;
}

export const Sidebar = ({ email, handleNewPost }: SidebarInterface) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const handleLogout = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.preventDefault();
		dispatch(authSlice.actions.clearCredentials());
		persistor.purge();
		navigate('/');
	};
	return (
		<Styled.Sidebar>
			<Styled.SidebarContent>
				<Styled.CustomH1>Welcome, {email}</Styled.CustomH1>
				<Styled.NavButtonsGroup role="navigation">
					<Styled.NavButton type="button" onClick={handleNewPost}>
						<span className="material-symbols-outlined">edit_note</span> Create
						new blog post
					</Styled.NavButton>
					<Styled.NavButton type="button" onClick={() => navigate('/profile')}>
						<span className="material-symbols-outlined">person</span> Profile
					</Styled.NavButton>
					<Styled.NavButton type="button" onClick={(e) => handleLogout(e)}>
						<span className="material-symbols-outlined">logout</span> Logout
					</Styled.NavButton>
				</Styled.NavButtonsGroup>
			</Styled.SidebarContent>
		</Styled.Sidebar>
	);
};
