import React, { useCallback } from 'react';
import { Tags } from '../reusable/Tags';

interface TagInputT {
	tags: string[];
	setTags: React.Dispatch<React.SetStateAction<string[]>>;
	tagInput: string;
	setTagInput: React.Dispatch<React.SetStateAction<string>>;
}

export const TagInput: React.FC<TagInputT> = ({
	tags,
	setTags,
	tagInput,
	setTagInput,
}) => {
	const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setTagInput(e.target.value);
	};

	const handleInputKeydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter' && tagInput.trim() !== '') {
			e.preventDefault();
			setTags([...tags, tagInput.trim()]);
			setTagInput('');
			console.log(tags);
		}
	};

	const handleDeleteTag = useCallback(
		(tagToDelete: string) => {
			const deleteTag = tags.filter((tag) => tag !== tagToDelete);
			setTags(deleteTag);
		},
		[tags, setTags],
	);

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
