import mongoose from 'mongoose';
import paint from "../dir/colorScheme"


const db = mongoose.connection;
db.on("error", console.error.bind(console, paint.Red + "❌ mongoDB connection error event: "));
const connection = { isConnected: 0 };

const dbConnection = async (): Promise<boolean> => {
    if (!connection.isConnected) {
        try {
            if (!process.env.db) return false;
            connection.isConnected = (await mongoose.connect(process.env.db)).connections[0].readyState;
            console.log(connection.isConnected ?
                paint.Green + "✅ mongoDB connection success"
                : paint.Red + "❌ mongoDB connection error")
            return !!connection.isConnected;
        } catch (e) { console.error(e); return false }
    }
    return true;
}

export default dbConnection;