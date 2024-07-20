import React, { useCallback, useEffect } from 'react';
import { InputTags } from '../reusable/Tags';

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
	useEffect(() => {}, [tags]);

	const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setTagInput(e.target.value);
	};

	const handleInputKeydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter' && tagInput.trim() !== '') {
			e.preventDefault();
			const checkDuplicate = tags.includes(tagInput.trim());
			if (!checkDuplicate) {
				setTags((prevTags) => [...prevTags, tagInput.trim()]);
				setTagInput('');
				console.log(tags);
			}
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
		<div className="flex flex-col gap-2">
			<div className="flex flex-row gap-2 flex-wrap">
				{tags.map((tag) => (
					<InputTags
						key={`${tag}`}
						tag={tag}
						handleDeleteTag={handleDeleteTag}
					/>
				))}
			</div>
			<label
				className="block text-sm font-medium text-white"
				htmlFor="tagsinput"
			>
				Input tags:
			</label>
			<input
				className="input bg-[#2f3e6a]"
				id="tagsinput"
				type="text"
				value={tagInput}
				onChange={(e) => handleOnChange(e)}
				onKeyDown={(e) => handleInputKeydown(e)}
			/>
		</div>
	);
};
