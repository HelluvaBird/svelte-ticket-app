import { TicketModel } from '$lib/models/Ticket';
import type { PageServerLoad } from './$types';

export const load = (async ({ params }) => {
	const { id } = params;
	let ticket = await TicketModel.findById(id).lean();

	ticket = JSON.parse(JSON.stringify(ticket));
	return { ticket };
}) satisfies PageServerLoad;
