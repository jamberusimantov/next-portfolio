import { isValidId } from '../functions';
import mongoose from 'mongoose'

class DBaction {
    POST = async (
        collection: mongoose.Model<any, {}, {}, {}>,
        schemaName: string,
        schemaType: any,
        data: any,
    ) => {
        const isValidArray = data && data instanceof Array && data.length;
        const isValidObject = data && data instanceof Object && Object.keys(data).length;
        try {
            if (isValidArray || isValidObject) {
                console.log(`saving to ${schemaName}s DB : `, data);
                const response: typeof schemaType[] = await collection.insertMany(data)
                if (!response) throw new Error('POST returned falsy');
                if (!response.length) throw new Error('POST returned empty');
                if (!isValidId(response[0]?._id)) throw new Error('POST returned invalid Id');
                const msg = `saved to ${schemaName}s DB : ${response.length} ${schemaName}s`
                console.log(msg);
                return ({ success: true, data: msg })
            }
            throw new Error('POST aborted, missing params for action');
        } catch (error: any) {
            return ({ success: false, data, error: error.message })
        }
    }
    GET = async (
        collection: mongoose.Model<any, {}, {}, {}>,
        schemaName: string,
        schemaType: any,
        query: { [key: string]: string | string[] },
    ) => {
        try {
            console.log(`getting from ${schemaName}s DB: `, query);
            const response: typeof schemaType[] = await collection.find(query).sort({ ascending: 1 });
            if (!response) throw new Error(`GET ${query} returned falsy`);
            const msg = `got from ${schemaName}s DB : ${response.length} ${schemaName}s`;
            console.log(msg);
            return ({ success: true, data: response })
        } catch (error: any) {
            return ({ success: false, data: query, error: error.message })
        }
    }
    DELETE = async (
        collection: mongoose.Model<any, {}, {}, {}>,
        schemaName: string,
        schemaType: any,
        id: string,
    ) => {
        try {
            if (id && isValidId(id)) {
                console.log(`deleting from ${schemaName}s DB : `, id);
                const response: typeof schemaType | null = await collection.findByIdAndDelete(id)
                if (!response) throw new Error('DELETE returned falsy');
                if (!Object.entries(response).length) throw new Error('DELETE returned empty');
                if (response?._id.toString() !== id) throw new Error('DELETE returned invalid Id');
                const msg = `deleted from ${schemaName}s DB : ${id}`
                console.log(msg);
                return ({ success: true, data: msg })
            }
            throw new Error('POST aborted, missing id for action');
        } catch (error: any) {
            return ({ success: false, data: id, error: error.message })
        }
    }
    PUT = async (
        collection: mongoose.Model<any, {}, {}, {}>,
        schemaName: string,
        schemaType: any,
        data: any,
        id: string,
    ) => {
        try {
            if (id && isValidId(id)) {
                console.log(`updating ${schemaName}s DB : `, id);
                const options = { returnDocument: 'after' }
                const response: typeof schemaType = await collection.findByIdAndUpdate(id, data, options)
                if (!response) throw new Error('PUT returned falsy');
                if (!Object.entries(response).length) throw new Error('PUT returned empty');
                if (response?._id.toString() !== id) throw new Error('PUT returned invalid Id');
                const msg = `updated ${schemaName}s DB : ${id}`
                console.log(msg);
                return ({ success: true, data: msg })
            }
            throw new Error('PUT aborted, missing id for action');
        } catch (error: any) {
            return ({ success: false, data, error: error.message })
        }
    }
}
const DBer = new DBaction();

export default DBer;