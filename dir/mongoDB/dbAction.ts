import { isValidId } from '../functions';
import mongoose from 'mongoose'
// import dbConnection from './connection';

type dbDoc = { _id: object }
type collection = mongoose.Model<any, {}, {}, {}>

class DBaction {

    POST = async (collection: collection, data: object) => {
        try {
            // await dbConnection();
            console.log(`saving to ${collection.modelName}s DB : `, data);
            const response: dbDoc[] = await collection.insertMany(data)
            if (!response) throw new Error('POST returned falsy');
            if (!response.length) throw new Error('POST returned empty');
            if (!isValidId(response[0]._id)) throw new Error('POST returned invalid Id');
            console.log(`saved to ${collection.modelName}s DB : ${response[0]._id}`);
            return ({
                success: true,
                data: response[0],
                id: response[0]._id.toString(),
                message: `saved to ${collection.modelName}s DB : ${response[0]._id}`,
            })
        } catch (error: any) {
            console.log(error.message);
            return ({
                success: false,
                data,
                error,
            })
        }
    }

    GET = async (collection: collection, id: string) => {
        try {
            if (id && isValidId(id)) {
                // await dbConnection();
                console.log(`getting from ${collection.modelName}s DB : ${id}`);
                const response: dbDoc | null = await collection.findById(id)
                if (!response) throw new Error('GET returned falsy');
                if (!Object.entries(response).length) throw new Error('GET returned empty');
                if (response._id?.toString() !== id) throw new Error('GET returned invalid Id');
                console.log(`got from ${collection.modelName}s DB : ${response._id}`);
                return ({
                    success: true,
                    data: response,
                    id,
                    message: `got from ${collection.modelName}s DB : ${response._id}`,
                })
            }
            throw new Error('GET aborted, invalid id');
        } catch (error: any) {
            console.log(error.message);
            return ({
                success: false,
                data: { id },
                error,
            })
        }
    }

    DELETE = async (collection: collection, id: string) => {
        try {
            if (id && isValidId(id)) {
                // await dbConnection();
                console.log(`deleting from ${collection.modelName}s DB : ${id}`);
                const response: dbDoc | null = await collection.findByIdAndDelete(id)
                if (!response) throw new Error('DELETE returned falsy');
                if (!Object.entries(response).length) throw new Error('DELETE returned empty');
                if (response._id?.toString() !== id) throw new Error('DELETE returned invalid Id');
                console.log(`deleted from ${collection.modelName}s DB : ${response._id}`);
                return ({
                    success: true,
                    data: response,
                    id,
                    message: `deleted from ${collection.modelName}s DB : ${response._id}`,
                })
            }
            throw new Error('DELETE aborted, invalid id');
        } catch (error: any) {
            console.log(error.message);
            return ({
                success: false,
                data: { id },
                error,
            })
        }
    }

    PUT = async (collection: collection, data: object, id: string) => {
        try {
            if (id && isValidId(id)) {
                // await dbConnection();
                console.log(`updating ${collection.modelName}s DB : ${id}`);
                const options = { returnDocument: 'after' }
                const response: dbDoc | null = await collection.findByIdAndUpdate(id, data, options)
                if (!response) throw new Error('PUT returned falsy');
                if (!Object.entries(response).length) throw new Error('PUT returned empty');
                if (response._id?.toString() !== id) throw new Error('PUT returned invalid Id');
                console.log(`updated ${collection.modelName}s DB : ${response._id}`);
                return ({
                    success: true,
                    data: response,
                    id,
                    message: `updated ${collection.modelName}s DB : ${response._id}`,
                })
            }
            throw new Error('PUT aborted, invalid id');
        } catch (error: any) {
            console.log(error.message);
            return ({
                success: false,
                data: { data, id },
                error,
            })
        }
    }

}
const DBer = new DBaction();

export default DBer; 