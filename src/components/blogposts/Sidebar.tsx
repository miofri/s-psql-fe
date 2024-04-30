import React from 'react';

import * as Styled from '../../styles/styles';
import { useNavigate } from 'react-router-dom';

interface SidebarInterface {
	email: string;
	handleNewPost: () => void;
}

export const Sidebar = ({ email, handleNewPost }: SidebarInterface) => {
	const navigate = useNavigate();
	return (
		<Styled.Sidebar>
			<Styled.SidebarContent>
				<Styled.CustomH1>Welcome, {email}</Styled.CustomH1>
				<Styled.NavButtons role="navigation">
					<button type="button" onClick={handleNewPost}>
						Create new blog post
					</button>
					<button type="button" onClick={() => navigate('/profile')}>
						Profile
					</button>
				</Styled.NavButtons>
			</Styled.SidebarContent>
		</Styled.Sidebar>
	);
};
