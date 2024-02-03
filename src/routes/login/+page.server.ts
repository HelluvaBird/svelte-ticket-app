import { fail, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { dev } from '$app/environment';
import { v4 as uuid } from 'uuid';

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
	default: async ({ request, cookies, url }) => {
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
		const sessionId = uuid();
		cookies.set('session', sessionId, {
			path: '/',
			httpOnly: true,
			sameSite: 'strict',
			secure: !dev,
			maxAge: 60 * 60 * 24 * 2
		});

		const redirectTo = `/${url.searchParams.get('redirect')?.slice(1)}` ?? '/';

		redirect(303, redirectTo);
	}
};
