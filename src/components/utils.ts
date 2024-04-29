/* eslint-disable @typescript-eslint/no-explicit-any */
export const handleInputChange = (
	{ target: { name, value } }: React.ChangeEvent<HTMLInputElement>,
	setFormState: React.Dispatch<React.SetStateAction<any>>
) => {
	setFormState((prev: any) => ({ ...prev, [name]: value }));
};

export const handleTextAreaChange = (
	{ target: { name, value } }: React.ChangeEvent<HTMLTextAreaElement>,
	setFormState: React.Dispatch<React.SetStateAction<any>>
) => {
	setFormState((prev: any) => ({ ...prev, [name]: value }));
};
