import styled from "styled-components";
import { device } from "./breakpoints";
import { borderRadius } from "./Shared.styles";

export const Dashboard = styled.div`
	display: grid;
	grid-template-rows: 20vw 70vw;
	gap: 8vh;
	width: 100vw;
	height: 100vh;
	@media ${device.lg} {
		grid-template-columns: 18vw 70vw;
		gap: 2vw;
	}
`;
export const Sidebar = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	min-height: 18vh;
	background-color: #272531;
	@media ${device.lg} {
		align-items: flex-start;
		height: 100vh;
		border-radius: ${borderRadius};
	}
`;
export const SidebarContent = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	width: 70vw;
	@media ${device.lg} {
		justify-content: flex-start;
		width: 12vw;
		margin-top: 4rem;
	}
`;
export const NavButtonsGroup = styled.nav`
	display: flex;
	flex-direction: row;
	font-size: 0.6rem;
	@media ${device.xs} {
		font-size: 0.8rem;
	}
	@media ${device.lg} {
		flex-direction: column;
		align-items: flex-start;
		width: 100%;
		font-size: 1rem;
	}
`;
export const NavButton = styled.button`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	padding: 0.6rem 0.6rem 0.6rem 0;
	background-color: transparent;
	width: 100%;
	transition:
		color,
		background-color 0.2s;
	text-align: left;
	&:hover {
		border: 1px solid transparent;
		color: #272531;
		background-color: #e6e6e6;
	}
`;
export const Blogposts = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	margin-top: 4vh;
	height: 76vh;
	overflow-y: scroll;
	@media ${device.md} {
		height: 94vh;
	}
`;
export const Article = styled.article`
	padding: 4rem;
	background-color: #272531;
	margin: 1vh 2vw;
	border-radius: ${borderRadius};
	white-space: pre-line;
	@media ${device.md} {
		margin-right: 2vh;
	}
`;
export const ArticleDate = styled.p`
	color: #a7a7a7;
	font-size: 0.8rem;
`;
