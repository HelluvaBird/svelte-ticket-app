import { dbConnect } from '$lib/database';
import type { Handle } from '@sveltejs/kit';

await dbConnect();

export const handle = (async ({ event, resolve }) => {
	return resolve(event);
}) satisfies Handle;
