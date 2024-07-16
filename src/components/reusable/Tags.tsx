import React from 'react';

interface TagInput {
	tag: string;
	handleDeleteTag: (tagToDelete: string) => void;
}

export const Tags: React.FC<TagInput> = ({ tag, handleDeleteTag }) => {
	return (
		<div className="rounded-xl flex flex-row justify-center items-center gap-2 h-fit py-1 px-4 bg-primary/50">
			<div role="button" className="" onClick={() => handleDeleteTag(tag)}>
				x
			</div>
			<span>{tag}</span>
		</div>
	);
};
