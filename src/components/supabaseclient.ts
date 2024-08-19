import { createClient, SupabaseClient } from '@supabase/supabase-js';

let supabase: SupabaseClient | null = null;

export const getSupabaseClient = (userToken: string): SupabaseClient => {
	const options = {
		global: {
			headers: { Authorization: `Bearer ${userToken}` },
		},
	};
	console.log(options);

	if (!supabase) {
		supabase = createClient(
			import.meta.env.VITE_APP_SUPABASE_URL,
			import.meta.env.VITE_APP_SUPABASE_ANON_KEY,
			options,
		);
	}
	console.log(supabase);

	return supabase;
};
