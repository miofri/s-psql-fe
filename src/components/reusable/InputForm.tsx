import React from 'react';
import * as Styled from '../../styles/styles';

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
	bool,
	handleChange,
}: Input) => {
	return (
		<Styled.SharedStyle.InputContainer $blogpost={bool}>
			<Styled.SharedStyle.Label htmlFor={name}>
				{label}
			</Styled.SharedStyle.Label>
			<Styled.SharedStyle.Input
				required
				type={type}
				name={name}
				id={name}
				defaultValue={defaultValue}
				placeholder={placeholder}
				onChange={handleChange}
			/>
		</Styled.SharedStyle.InputContainer>
	);
};
