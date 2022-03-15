import React, { FormEvent, useState } from 'react';
import { CustomBtn } from '../../dir/elements';
import { fetcher } from '../../dir/functions';
import { messageFormData, response } from '../../dir/types';

const mockFormData = {
    name: '',
    email: '',
    phone: '',
}
// 0=>initial 
// 1=>error 
// 2=>success
const Form = () => {
    const [formData, setFormData] = useState<messageFormData>(mockFormData);
    const [apiResponse, setApiResponse] = useState(0)
    const submit = async (e: FormEvent) => {
        e.preventDefault();
        const response: response = await fetcher('/api/messages', 'POST', formData)
        response.error && setApiResponse(1)
        if (response.success) {
            setApiResponse(2)
            setFormData(mockFormData);
        }
        setTimeout(() => { setApiResponse(0) }, 3000);
    }

    return (
        <div className='formContainer'>
            <p className='form_title'>
                רוצים לשמוע עוד או לעבוד יחד? מלאו פרטים עכשיו ואחזור אליכם בהקדם
            </p>

            <form onSubmit={submit} className='form'>
                <div className='input_container'>
                    <input
                        placeholder='שם'
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className='input'
                        required
                        value={formData?.name}
                        type='text'
                    />
                </div>
                <div className='input_container'>
                    <input
                        placeholder='דוא"ל'
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className='input'
                        required
                        value={formData?.email}
                        type='email'
                    />
                </div>
                <div className='input_container'>
                    <input
                        placeholder='טלפון'
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className='input'
                        required
                        value={formData?.phone}
                        type='tel'
                        pattern="[0-9]{3}-[0-9]{7}"
                    />
                </div>
                <div className='submitBtn_container'>
                    <CustomBtn
                        type='submit'
                        className='submitBtn'
                        child={{
                            name: apiResponse === 2
                                ? 'success'
                                : apiResponse === 1
                                    ? 'failure'
                                    : undefined,
                            text: 'שליחה',
                            size: 25
                        }}
                    />
                </div>
            </form>
        </div>
    )
}
export default Form;