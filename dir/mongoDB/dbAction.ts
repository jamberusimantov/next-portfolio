import { isValidId } from '../functions';
import mongoose from 'mongoose'


type dbDoc = { _id: object }
type collection = mongoose.Model<any, {}, {}, {}>
type query = { [key: string]: string | string[] }

class DBaction {

    POST = async (collection: collection, data: object) => {
        const isValidArray = data && data instanceof Array && data.length;
        const isValidObject = data && data instanceof Object && Object.keys(data).length;
        try {
            if (isValidArray || isValidObject) {
                console.log(`saving to ${collection.modelName}s DB : `, data);
                const response: dbDoc[] = await collection.insertMany(data)
                if (!response) throw new Error('POST returned falsy');
                if (!response.length) throw new Error('POST returned empty');
                if (!isValidId(response[0]._id)) throw new Error('POST returned invalid Id');
                console.log(`saved to ${collection.modelName}s DB : ${response.length} ${collection.modelName}s`);
                return ({
                    success: true,
                    data,
                    message: `saved to ${collection.modelName}s DB : ${response.length} ${collection.modelName}s`,
                })
            }
            throw new Error('POST aborted, missing params for action');
        } catch (error: any) {
            return ({
                success: false,
                data,
                error
            })
        }
    }

    GET = async (collection: collection, query: query) => {
        try {
            console.log(`getting from ${collection.modelName}s DB: `, query);
            const response: dbDoc[] = await collection.find(query).sort({ ascending: 1 });
            if (!response) throw new Error(`GET ${query} returned falsy`);
            console.log(`got from ${collection.modelName}s DB : ${response.length} ${collection.modelName}s`);
            return ({
                success: true,
                data: response,
                message: `got from ${collection.modelName}s DB : ${response.length} ${collection.modelName}s`
            })
        } catch (error: any) {
            return ({
                success: false,
                data: query,
                error
            })
        }
    }

    DELETE = async (collection: collection, id: string) => {
        try {
            if (id && isValidId(id)) {
                console.log(`deleting from ${collection.modelName}s DB : `, id);
                const response: dbDoc | null = await collection.findByIdAndDelete(id)
                if (!response) throw new Error('DELETE returned falsy');
                if (!Object.entries(response).length) throw new Error('DELETE returned empty');
                if (response._id?.toString() !== id) throw new Error('DELETE returned invalid Id');
                console.log(`deleted from ${collection.modelName}s DB : ${id}`);
                return ({
                    success: true,
                    data: response,
                    message: `deleted from ${collection.modelName}s DB : ${id}`
                })
            }
            throw new Error('POST aborted, missing id for action');
        } catch (error: any) {
            return ({
                success: false,
                data: id,
                error
            })
        }
    }

    PUT = async (collection: collection, data: object, id: string) => {
        try {
            if (id && isValidId(id)) {
                console.log(`updating ${collection.modelName}s DB : `, id);
                const options = { returnDocument: 'after' }
                const response: dbDoc | null = await collection.findByIdAndUpdate(id, data, options)
                if (!response) throw new Error('PUT returned falsy');
                if (!Object.entries(response).length) throw new Error('PUT returned empty');
                if (response._id?.toString() !== id) throw new Error('PUT returned invalid Id');
                console.log(`updated ${collection.modelName}s DB : ${id}`);
                return ({
                    success: true,
                    data: response,
                    message: `updated ${collection.modelName}s DB : ${id}`
                })
            }
            throw new Error('PUT aborted, missing id for action');
        } catch (error: any) {
            return ({
                success: false,
                data,
                error
            })
        }
    }
}
const DBer = new DBaction();

export default DBer; 