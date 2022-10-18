import mongoose from 'mongoose'
import getConfig from 'next/config';


const db = mongoose.connection;
db.on("error", console.error.bind(console, "\x1b[31connection error:"));
const connection = { isConnected: 0 };

const dbConnection = async (): Promise<void> => {
    const { serverRuntimeConfig } = getConfig();
    if (!connection.isConnected) {
        try {
            const response = await mongoose.connect(serverRuntimeConfig.db);
            connection.isConnected = response.connections[0].readyState
            console.log(connection.isConnected ? "\x1b[32mmongoDB connected" : "\x1b[31mmongoDB connection error")
        } catch (e) { console.error(e) }
    }
}

export default dbConnection;