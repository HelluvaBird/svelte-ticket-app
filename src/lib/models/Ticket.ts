import type { TicketModelType } from '$lib/types/types';
import mongoose from 'mongoose';
import { NoteModel } from './Note';

const ticketSchema = new mongoose.Schema(
	{
		product: {
			type: String,
			required: [true, 'product is required'],
			enum: ['iPhone/iPad', 'Macbook', 'Apple Watch']
		},
		description: {
			type: String,
			required: [true, 'description is required']
		},
		status: {
			type: String,
			required: true,
			enum: ['new', 'open', 'closed'],
			default: 'new'
		}
	},
	{ timestamps: true }
);

ticketSchema.virtual('notes', {
	ref: NoteModel,
	localField: '_id',
	foreignField: 'ticketId'
});

export const TicketModel: mongoose.Model<TicketModelType> =
	mongoose.models.Ticket ?? mongoose.model<TicketModelType>('Ticket', ticketSchema);
