import { TicketModel } from '$lib/models/Ticket';
import { fail, redirect } from '@sveltejs/kit';
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

		if (!product) {
			return fail(400, { product, missing: true });
		}
		if (!description) {
			return fail(400, { product, description: { missing: true } });
		}

		const newTicket = new TicketModel({ product, description });
		await newTicket.save();
		return redirect(303, '/tickets');
	}
} satisfies Actions;
