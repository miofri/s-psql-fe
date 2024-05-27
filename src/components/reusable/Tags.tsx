import React from "react";

interface TagInput {
	tag: string;
	handleDeleteTag: (tagToDelete: string) => void;
}

export const Tags: React.FC<TagInput> = ({ tag, handleDeleteTag }) => {
	return (
		<div>
			<button onClick={() => handleDeleteTag(tag)}>x</button>
			<span>{tag}</span>
		</div>
	);
};
