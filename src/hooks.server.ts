import { dbConnect } from '$lib/database';
import { redirect, type Handle } from '@sveltejs/kit';

await dbConnect();

export const handle = (async ({ event, resolve }) => {
	const sessionId = event.cookies.get('session');
	if (!sessionId) {
		event.locals.user = null;
	} else {
		event.locals.user = {
			name: 'Guest',
			email: 'guest@dev.com'
		};
	}

	if (sessionId && event.url.pathname.includes('/login')) {
		redirect(303, '/');
	}

	return resolve(event);
}) satisfies Handle;
