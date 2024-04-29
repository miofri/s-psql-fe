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
		<Styled.InputContainer>
			<label htmlFor={name}>{label}</label>
			<textarea
				name={name}
				id={name}
				defaultValue={defaultValue}
				placeholder={placeholder}
				onChange={handleChange}
			/>
		</Styled.InputContainer>
	);
};
