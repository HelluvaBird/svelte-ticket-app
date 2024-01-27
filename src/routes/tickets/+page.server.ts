import { TicketModel } from '$lib/models/Ticket';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	let tickets = await TicketModel.find({}).lean();

	tickets = JSON.parse(JSON.stringify(tickets));
	return { tickets };
}) satisfies PageServerLoad;
