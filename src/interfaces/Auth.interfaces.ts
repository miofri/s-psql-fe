interface Auth {
	email: string | undefined;
	password: string | undefined;
}

interface Credentials {
	token: string;
	user: {
		email: string;
		user_id: number;
	};
}

export type { Auth, Credentials };
