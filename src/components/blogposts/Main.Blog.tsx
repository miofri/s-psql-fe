import { Sidebar } from './Sidebar';
import { useNavigate } from 'react-router-dom';
import { BlogPosts } from './BlogPosts';

export const Blog = () => {
	const navigate = useNavigate();
	const handleNewPost = () => {
		navigate('/newpost');
	};

	return (
		<div>
			<div className="drawer">
				<input id="my-drawer" type="checkbox" className="drawer-toggle" />
				<div className="drawer-content">
					<div className="h-fit w-[50vw] flex flex-row">
						<label
							htmlFor="my-drawer"
							className="btn h-14 drawer-button mt-24 mr-4 border-none bg-accent/70 hover:bg-accent/80 rounded-xl"
						>
							<span className="material-symbols-outlined white ">menu</span>
						</label>
						<BlogPosts />
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
