import { NoteModel } from '$lib/models/Note';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request }) => {
	const { ticketId, message } = await request.json();

	const newNote = new NoteModel({
		ticketId,
		message
	});

	await newNote.save();
	return json(newNote, { status: 201 });
};
