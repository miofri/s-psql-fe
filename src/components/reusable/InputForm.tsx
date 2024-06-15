import React from 'react';

interface Input {
	label: string;
	name: string;
	type: string;
	defaultValue: string | undefined;
	placeholder: string | undefined;
	bool: boolean;
	handleChange: ({
		target: { name, value },
	}: React.ChangeEvent<HTMLInputElement>) => void;
}
export const InputForm = ({
	label,
	name,
	type,
	defaultValue,
	placeholder,
	handleChange,
}: Input) => {
	return (
		<div className="max-w-96 flex flex-col gap-2">
			<label className="block text-sm font-medium text-white" htmlFor={name}>
				{label}
			</label>
			<input
				className="py-2.5 px-4"
				required
				type={type}
				name={name}
				id={name}
				defaultValue={defaultValue}
				placeholder={placeholder}
				onChange={handleChange}
			/>
		</div>
	);
};
