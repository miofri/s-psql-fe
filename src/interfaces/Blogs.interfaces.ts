interface Blog {
	id: string;
	title: string;
	body: string;
	date: string;
	sub: string;
	created_at: string;
	tags: Tag[];
}

interface Tag {
	tag_id: number;
	tag_name: string;
}

interface PostBlog {
	title: string;
	body: string;
	tags: string[];
	sub: string;
}

interface PatchBlog {
	title: string;
	body: string;
	post_id: string;
}

interface JSONMessage {
	message: string;
}

export type { Blog, PostBlog, PatchBlog, JSONMessage };
