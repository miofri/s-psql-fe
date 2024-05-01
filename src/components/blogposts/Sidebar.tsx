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
		<Styled.BlogpostsStyle.Sidebar>
			<Styled.BlogpostsStyle.SidebarContent>
				<Styled.SharedStyle.CustomH2>
					Welcome, {email}
				</Styled.SharedStyle.CustomH2>
				<Styled.BlogpostsStyle.NavButtonsGroup role="navigation">
					<Styled.BlogpostsStyle.NavButton
						type="button"
						onClick={handleNewPost}
					>
						<span className="material-symbols-outlined">edit_note</span> Create
						new blog post
					</Styled.BlogpostsStyle.NavButton>
					<Styled.BlogpostsStyle.NavButton
						type="button"
						onClick={() => navigate('/profile')}
					>
						<span className="material-symbols-outlined">person</span> Profile
					</Styled.BlogpostsStyle.NavButton>
					<Styled.BlogpostsStyle.NavButton
						type="button"
						onClick={(e) => handleLogout(e)}
					>
						<span className="material-symbols-outlined">logout</span> Logout
					</Styled.BlogpostsStyle.NavButton>
				</Styled.BlogpostsStyle.NavButtonsGroup>
			</Styled.BlogpostsStyle.SidebarContent>
		</Styled.BlogpostsStyle.Sidebar>
	);
};
