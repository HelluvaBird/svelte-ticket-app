import { TicketModel } from '$lib/models/Ticket';
import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const PATCH: RequestHandler = async ({ params }) => {
	const { id } = params;
	const ticket = await TicketModel.findById(id);
	if (!ticket) {
		throw error(404, 'ticket not found');
	}
	ticket.status = 'closed';
	await ticket.save();
	return json('ticket closed', { status: 200 });
};
