import * as BlogInterface from '../../interfaces/Blogs.interfaces';

export const sort_blogs_by_date_newest = (response: BlogInterface.Blog[]) => {
	const transformed = response.map((res) => ({
		...res,
		created_at: new Date(res.created_at).getTime(),
	}));
	transformed.sort((a, b) => {
		return b.created_at - a.created_at;
	});
	const final = transformed.map((data) => ({
		...data,
		created_at: data.created_at.toString(),
	}));
	return final;
};
