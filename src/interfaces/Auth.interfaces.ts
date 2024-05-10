interface Auth {
	email: string | undefined;
	password: string | undefined;
	firstName: string | undefined;
	lastName: string | undefined;
}

interface Credentials {
	token: string;
	user: {
		email: string;
		sub: string;
		firstName: string;
		lastName: string;
	};
}

export type { Auth, Credentials };
