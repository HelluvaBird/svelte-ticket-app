import mongoose from 'mongoose';
import { MONGO_URI } from '$env/static/private';

//example from https://github.com/gustavocadev/mongoose-sveltekit-example

const mongoConnection = {
	isConnected: 0
};

export const dbConnect = async () => {
	if (mongoConnection.isConnected === 1) {
		return;
	}

	if (mongoose.connections.length > 0) {
		mongoConnection.isConnected = mongoose.connections[0].readyState;
		if (mongoConnection.isConnected === 1) {
			return;
		}

		await mongoose.disconnect();
	}

	await mongoose.connect(MONGO_URI, {
		dbName: 'ticket-app'
	});
	mongoConnection.isConnected = 1;
};
