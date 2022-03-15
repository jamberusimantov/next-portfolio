import mongoose from 'mongoose'
import getConfig from 'next/config';

const connection = { isConnected: 0 };

const dbConnection = async () => {
    const { serverRuntimeConfig } = getConfig();
    if (!connection.isConnected) {
        try {
            const db = await mongoose.connect(serverRuntimeConfig.db);
            connection.isConnected = db.connections[0].readyState
            connection.isConnected ?
                console.log("\x1b[32mmongoDB connected") :
                console.log("\x1b[31mmongoDB connection error");
        } catch (e) { console.error(e) }
    }
}

export default dbConnection;