import { TicketModel } from '$lib/models/Ticket';
import type { PageServerLoad } from './$types';

export const load = (async ({ params, depends, parent }) => {
	depends('app:notes');
	const { id } = params;
	let ticket = await TicketModel.findById(id).lean().populate('notes');

	ticket = JSON.parse(JSON.stringify(ticket));
	const { user } = await parent();
	return { ticket, user };
}) satisfies PageServerLoad;
