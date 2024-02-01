import { fail } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

export const load = (async () => {
	return {};
}) satisfies PageServerLoad;

type ErrorObjectType = {
	email?: {
		value: FormDataEntryValue | null;
		missing: boolean;
	};
	password?: {
		missing: boolean;
	};
};

export const actions: Actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const error: ErrorObjectType = {};
		const email = formData.get('email');
		const password = formData.get('password');
		if (!email) {
			error.email = { value: email, missing: true };
		} else {
			error.email = { value: email, missing: false };
		}

		if (!password) {
			error.password = { missing: true };
		} else {
			error.password = { missing: false };
		}

		if (error.email?.missing || error.password?.missing) {
			return fail(400, error);
		}
	}
};
