import React, { useState } from 'react';
import { Tags } from '../reusable/Tags';

interface TagInputT {
	tags: string[];
	setTags: React.Dispatch<React.SetStateAction<string[]>>;
	tagInput: string;
	setTagInput: React.Dispatch<React.SetStateAction<string>>;
}

export const TagInput: React.FC<TagInputT> = () => {
	const [tags, setTags] = useState<string[]>([]);
	const [tagInput, setTagInput] = useState<string>('');

	const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setTagInput(e.target.value);
	};

	const handleInputKeydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter' && tagInput.trim() !== '') {
			e.preventDefault();
			setTags([...tags, tagInput.trim()]);
			setTagInput('');
			console.log();
		}
	};

	const handleDeleteTag = (tagToDelete: string) => {
		const withoutTagToDelete = tags.filter((tag) => tag !== tagToDelete);
		setTags(withoutTagToDelete);
	};

	return (
		<div>
			<div>
				{tags.map((tag) => (
					<Tags key={`${tag}`} tag={tag} handleDeleteTag={handleDeleteTag} />
				))}
			</div>
			<input
				type="text"
				onChange={(e) => handleOnChange(e)}
				onKeyDown={(e) => handleInputKeydown(e)}
			/>
		</div>
	);
};
