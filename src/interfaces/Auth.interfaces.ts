interface Auth {
	email: string | undefined;
	password: string | undefined;
}

interface Credentials {
	token: string;
	user: {
		email: string;
		sub: string;
	};
}

export type { Auth, Credentials };
