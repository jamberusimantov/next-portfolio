import React, { FormEvent, useState } from 'react';
import { CustomBtn } from '../../dir/elements';
import { fetcher } from '../../dir/functions';
import { messageFormData, response } from '../../dir/types';
import styles from './Form.module.css';


const mockFormData = {
    name: '',
    email: '',
    phone: '',
    message: '',
}

// 0=>initial 
// 1=>error 
// 2=>success

const Form = (props: { className?: string, textarea?: boolean }) => {
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
        <form onSubmit={submit} className={props.className || styles.form}>
            <div className={styles.input_container}>
                <input
                    placeholder='שם'  
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={styles.input}
                    required
                    value={formData?.name}
                    type='text'
                />
            </div>
            <div className={styles.input_container}>
                <input
                    placeholder='דוא"ל'
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={styles.input}
                    required
                    value={formData?.email}
                    type='email'
                />
            </div>
            <div className={styles.input_container}>
                <input
                    placeholder='טלפון'
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={styles.input}
                    required
                    value={formData?.phone}
                    type='tel'
                    pattern="[0-9]{3}-[0-9]{7}"
                />
            </div>
            {props.textarea && <div className={styles.input_container}>
                <textarea
                    placeholder=' הודעה - לא חובה'
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={styles.textarea}
                    value={formData?.message}
                />
            </div>
            }
            <div className={styles.submitBtn_container}>
                <CustomBtn
                    type='submit'
                    className={styles.submitBtn}
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
    )
}
export default Form;