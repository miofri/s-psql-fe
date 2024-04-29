import React from 'react';
import * as Styled from '../../styles/styles';

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
		<Styled.InputContainer>
			<label htmlFor={name}>{label}</label>
			<input
				type={type}
				name={name}
				id={name}
				defaultValue={defaultValue}
				placeholder={placeholder}
				onChange={handleChange}
			/>
		</Styled.InputContainer>
	);
};
