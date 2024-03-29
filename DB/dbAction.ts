import mongoose, { ObjectId } from 'mongoose';


const DB = async (props: iDBProps) => {
    const { collection, method, data } = props;
    let response: mongoose.Document | null = null;
    try {
        if (!collection || !method || !data) throw new Error("missing params one or more: collection, method, data");
        console.log(`${method} ${collection.modelName}s DB : `, data);
        const id = data.id;
        id && delete data.id;
        switch (method) {
            case "POST": {
                const doc = new collection(data);
                response = await doc.save();
                break;
            }
            case "GET": {
                response = await collection.findById(id)
                break;
            }
            case "PUT": {
                response = await collection.findByIdAndUpdate(id, data, { returnDocument: 'after' })
                break;
            }
            case "DELETE": {
                response = await collection.findByIdAndDelete(id)
                break;
            }
            default: { }
        }
        const isValid = validator({ response, method });
        if (!isValid.success) throw new Error(isValid.message);
        console.log(`${method} ${collection.modelName}s DB id: ${isValid.data?._id}`);
        return ({
            success: true,
            data: isValid.data,
            message: `${method} ${collection.modelName}s DB id: ${isValid.data?._id}`,
        })
    } catch (err: any) {
        console.error(err);
        return ({ success: false, data, error: err.message })
    }
}
export interface iResponse {
    success: boolean,
    data?: any,
    error?: string,
    message?: string,
};

interface iDBProps {
    collection: mongoose.Model<any, {}, {}, {}>,
    method: keyof { GET: "", PUT: "", POST: "", DELETE: "" };
    data: { 
        name?: String,
        email?: String,
        message?: String,
        phone?: String,
        subject?: String,
        id?: string,    
        _id?:ObjectId,

     },
}
interface iValidatorProps {
    response: mongoose.Document | null;
    method: keyof { GET: "", PUT: "", POST: "", DELETE: "" };
}

export const validator = (props: iValidatorProps) => {
    const { response, method } = props;
    if (!response) return ({ success: false, message: method + ' returned undefined' });
    if (!(response instanceof Object) || response == null) return ({ success: false, message: method + ' returned invalid type' });
    if (!Object.entries(response).length) return ({ success: false, message: method + ' returned empty' });
    return ({ success: true, message: method + ' returned valid data', data: response });
}

export default DB;