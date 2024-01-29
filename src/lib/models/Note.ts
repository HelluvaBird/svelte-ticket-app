import type { NoteModelType } from '$lib/types/types';
import mongoose from 'mongoose';

const noteSchema = new mongoose.Schema(
	{
		ticketId: {
			type: mongoose.Schema.Types.ObjectId,
			required: [true, 'Ticket Id is required'],
			ref: 'Ticket'
		},
		message: {
			type: String,
			required: [true, 'message is required']
		}
	},
	{ timestamps: true }
);

export const NoteModel: mongoose.Model<NoteModelType> =
	mongoose.models.Note ?? mongoose.model<NoteModelType>('Note', noteSchema);
