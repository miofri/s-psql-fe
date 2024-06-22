import { Children } from '../../../interfaces/Children';

export const CustomH1 = ({ children }: Children) => {
	return <h1 className="text-5xl text-wrap">{children}</h1>;
};
