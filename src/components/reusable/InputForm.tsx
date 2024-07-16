import React from 'react';

interface Input {
	label: string;
	name: string;
	type: string;
	defaultValue: string | undefined;
	placeholder: string | undefined;
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
		<div className="w-full flex flex-col gap-2">
			<label
				className="block text-xs md:text-sm font-medium text-white"
				htmlFor={name}
			>
				{label}
			</label>
			<input
				className="input py-2 px-4 bg-[#2f3e6a] text-xs sm:text-sm"
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
