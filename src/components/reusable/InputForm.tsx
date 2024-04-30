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
		<Styled.InputContainer $blogpost={bool}>
			<Styled.Label htmlFor={name}>{label}</Styled.Label>
			<Styled.Input
				$blogpost={bool}
				required
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
