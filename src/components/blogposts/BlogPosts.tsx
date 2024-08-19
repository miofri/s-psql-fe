import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import { RootState } from '../../store/store';
import { useDeleteBlogMutation, useGetBlogsQuery } from '../../store/rtk/api';

export const BlogPosts = () => {
	const navigate = useNavigate();
	const user = useSelector((state: RootState) => state.auth);
	const { data, isError } = useGetBlogsQuery(user.user.sub);
	const [deletePost] = useDeleteBlogMutation();

	useEffect(() => {
		if (user.token === '' || isError) {
			navigate('/');
		}
		console.log(data);
	}, [user, navigate, data, isError]);

	const handleUpdateClick = (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
		post_id: string,
	) => {
		e.preventDefault();
		navigate(`/editpost/${post_id}`);
	};

	const handleDeleteClick = (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
		post_id: string,
	) => {
		e.preventDefault();
		deletePost({ post_id: post_id });
	};

	const convertDate = (date: string) => {
		const newDate = new Date(parseInt(date)).toString().split(' ');
		const finalDate = newDate.slice(0, 5).join(' ');
		return finalDate;
	};

	if (data) {
		return (
			<div className="flex flex-col gap-4 mt-12 box-content max-w-full">
				<div className="flex flex-row justify-between items-center">
					<h1 className="mb-4 text-5xl text-wrap ">
						{data.length > 0 ? `Posts` : 'Start by creating a post'}
					</h1>
					<div>
						<label
							htmlFor="my-drawer"
							className="btn h-14 drawer-button  border-none bg-accent/70 hover:bg-accent/80 rounded-xl "
						>
							<span className="material-symbols-outlined white ">menu</span>
						</label>
					</div>
				</div>
				<div className="flex flex-col gap-4 max-h-[80vh] max-w-[80vw] overflow-scroll">
					{data?.map((post) => (
						<article
							className="flex flex-col gap-2 py-10 px-14 rounded-md whitespace-pre-line bg-primary/20"
							key={post.id}
						>
							<h2 className="font-bold text-2xl text-white mb-6">
								{post.title}
							</h2>
							<p className="text-white break-words">{post.body}</p>
							<div className="flex flex-row flex-wrap gap-2 w-full mt-5">
								{post.tags.map((tag) => (
									<div className="flex flex-row justify-center items-center gap-1 h-fit w-fit text-xs">
										#{tag.tag_name}
									</div>
								))}
							</div>
							<p className="text-white/65 text-xs">
								Posted on {convertDate(post.created_at)}
							</p>
							<div className="flex flex-row">
								<button
									type="button"
									onClick={(e) => handleUpdateClick(e, post.id)}
									className="btn btn-primary text-white "
								>
									Update
								</button>
								<button
									type="submit"
									onClick={(e) => handleDeleteClick(e, post.id)}
									className="btn btn-primary text-white bg-opacity-40 border-none hover:bg-accent/40"
								>
									Delete
								</button>
							</div>
						</article>
					))}
				</div>
			</div>
		);
	}
	return <></>;
};
