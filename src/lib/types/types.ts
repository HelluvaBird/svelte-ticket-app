export type TicketModelType = {
	_id: string;
	product: string;
	description: string;
	status: string;
	createdAt?: Date;
	updatedAt?: Date;
};

export type NoteModelType = {
	_id: string;
	ticketId: string;
	message: string;
	createdAt?: Date;
	updatedAt?: Date;
};
