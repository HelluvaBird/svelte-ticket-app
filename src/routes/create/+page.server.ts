import { TicketModel } from '$lib/models/Ticket';
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad, Actions } from './$types';

export const load = (async ({ locals }) => {
	return {
		user: locals.user
	};
}) satisfies PageServerLoad;

export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const product = formData.get('product');
		const description = formData.get('description');

		const newTicket = new TicketModel({ product, description });
		await newTicket.save();
		return redirect(303, '/tickets');
	}
} satisfies Actions;
