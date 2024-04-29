interface Blog {
	id: number;
	title: string;
	body: string;
	date: string;
	user_id: number;
	created_at: string;
}
interface PostBlog {
	title: string;
	body: string;
	user_id: number;
}

interface PatchBlog {
	title: string;
	body: string;
	post_id: number;
}

interface JSONMessage {
	message: string;
}

export type { Blog, PostBlog, PatchBlog, JSONMessage };
