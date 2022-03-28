import React, { useState } from 'react';
import styles from './EmailForm.module.css'
import { fetcher } from '../../dir/functions';

type response = {
    success: boolean,
    data: any,
    error?: string,
    message?: string,
}

const mockFormData = {
    name: '',
    email: '',
    phone: '',
    message: '',
    subject: '',
}

const EmailForm = () => {
    const [formData, setFormData] = useState(mockFormData);
    const [apiResponse, setApiResponse] = useState<number>()
    // 1=>error 
    // 2=>success
    const submit = async (e: React.FormEvent) => {
        e.preventDefault();

        const response: response = await fetcher('/api/message', 'POST', formData);
        if (!response.success) {
            setApiResponse(1)
            console.log(response.error);
        } else {
            setApiResponse(2)
            setFormData(mockFormData);
            console.log(response.message);
        }
        setTimeout(() => { setApiResponse(undefined) }, 5000);
    }
    const displayBtn = (message_description: string, message_btn: string) => {
        const el = document.getElementById(message_description);
        const el2 = document.getElementById(message_btn);
        if (el && el2) {
            el.classList.toggle(styles.active)
            el2.classList.toggle(styles.active)
        }
    }
    return (
        <>
            <p>שדות חובה *</p>
            <form onSubmit={submit}>

                {/* message input */}
                <div className={styles.input}>
                    <p className={styles.tag}>שאלה*</p>
                    <div className={styles.inputNBtnContainer}>
                        <div className={styles.inputContainer}>
                            <>
                                <textarea
                                    required={true}
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    maxLength={5000}
                                />
                                <span>{`5000/${5000 - formData.message.length}`}</span>
                            </>
                            <p className={styles.description} id={styles.message_description}>{"מס' תווים מקסימלי: 5000"}</p>
                            {/* <hr/> */}
                        </div>
                        <button
                            className={styles.descriptionBtn}
                            id={styles.message_btn}
                            onClick={() => displayBtn(styles.message_description, styles.message_btn)}>
                        </button>
                    </div>
                </div>

                {/* name input */}
                <div className={styles.input}>
                    <p className={styles.tag}>שם*</p>
                    <div className={styles.inputNBtnContainer}>
                        <div className={styles.inputContainer}>
                            <input
                                required={true}
                                type='text'
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                            <p className={styles.description} id={styles.name_description}>{"לא חובה שם מלא, שם פרטי זה מספיק"}</p>
                            {/* <hr/> */}
                        </div>
                        <button
                            className={styles.descriptionBtn}
                            id={styles.name_btn}
                            onClick={() => displayBtn(styles.name_description, styles.name_btn)}>
                        </button>
                    </div>
                </div>

                {/* subject input */}
                <div className={styles.input}>
                    <p className={styles.tag}>נושא</p>
                    <div className={styles.inputNBtnContainer}>
                        <div className={styles.inputContainer}>
                            <input
                                value={formData.subject}
                                type='text'
                                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                            />
                            <p className={styles.description} id={styles.subject_description}>{"מומלץ להוסיף נושא לצורך תיעדוף נכון אך לא חובה"}</p>
                            {/* <hr/> */}
                        </div>
                        <button
                            className={styles.descriptionBtn}
                            id={styles.subject_btn}
                            onClick={() => displayBtn(styles.subject_description, styles.subject_btn)}>
                        </button>
                    </div>
                </div>

                {/* phone input */}
                <div className={styles.input}>
                    <p className={styles.tag}>טלפון</p>
                    <div className={styles.inputNBtnContainer}>
                        <div className={styles.inputContainer}>
                            <input
                                value={formData.phone}
                                type='tel'
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            />
                            <p className={styles.description} id={styles.phone_description}>{"אשמח לטלפון כי יש דברים שיותר קל להגיד מאשר לכתוב"}</p>
                            {/* <hr/> */}
                        </div>
                        <button
                            className={styles.descriptionBtn}
                            id={styles.phone_btn}
                            onClick={() => displayBtn(styles.phone_description, styles.phone_btn)}>
                        </button>
                    </div>
                </div>

                {/* email input */}
                <div className={styles.input}>
                    <p className={styles.tag}>דוא"ל*</p>
                    <div className={styles.inputNBtnContainer}>
                        <div className={styles.inputContainer}>
                            <input
                                value={formData.email}
                                type='email'
                                required
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                            <p className={styles.description} id={styles.email_description}>{'נא למלא דוא"ל תקני. לדוגמא user@domain.com'}</p>
                            {/* <hr/> */}
                        </div>
                        <button
                            className={styles.descriptionBtn}
                            id={styles.email_btn}
                            onClick={() => displayBtn(styles.email_description, styles.email_btn)}>
                        </button>
                    </div>
                </div>

                <div className={styles.submit}>
                    <button type='submit' className='submitBtn'>
                        <p>שליחה</p>
                        <div className={`response ${apiResponse === 2
                            ? 'success'
                            : apiResponse === 1
                                ? 'failure'
                                : 'submit'
                            }`} >
                        </div>
                    </button>
                </div>
            </form>
        </>
    )
}
export default EmailForm;