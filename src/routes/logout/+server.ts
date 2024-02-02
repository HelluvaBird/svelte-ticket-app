import { redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ cookies, url }) => {
	cookies.set('session', '', {
		path: '/',
		expires: new Date(0)
	});

	redirect(303, url.searchParams.get('redirect') ?? '/');
};
