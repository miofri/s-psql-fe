import React from 'react';
import * as Styled from '../../styles/styles';

interface TextArea {
	label: string;
	name: string;
	defaultValue: string | undefined;
	placeholder: string | undefined;
	handleChange: ({
		target: { name, value },
	}: React.ChangeEvent<HTMLTextAreaElement>) => void;
}
export const TextArea = ({
	label,
	name,
	defaultValue,
	placeholder,
	handleChange,
}: TextArea) => {
	return (
		<div className="flex flex-col gap-2">
			<label className="block text-sm font-medium text-white" htmlFor={name}>
				{label}
			</label>
			<textarea
				className="textarea textarea-bordered text-white bg-[#2f3e6a] w-full"
				name={name}
				id={name}
				defaultValue={defaultValue}
				placeholder={placeholder}
				onChange={handleChange}
			/>
		</div>
	);
};
