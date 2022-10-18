import React, { useState, useContext } from 'react';
import type { ChangeEventHandler,FocusEventHandler,FormEventHandler } from 'react';
import styles from './EmailForm.module.css'
// import { getAppStateHtml } from '../../store/hooks'
import dictionary from '../../dir/dictionary'
import CustomBtn from '../CustomBtn'
import CustomInput from '../CustomInput'
import { HTMLContext } from '../../pages/_app'


interface iResponse {
    success: boolean,
    data: any,
    error?: string,
    message?: string,
}

interface iForm {
    subject: string,
    message: string,
    name: string,
    email: string,
    phone: string,
}

interface iDefaultShowHelp {
    subject: boolean,
    message: boolean,
    name: boolean,
    email: boolean,
    phone: boolean,
}

const fetcher = async (url: string, method = 'GET', body?: object): Promise<any> => {
    try {
        const response = await fetch(url, { method, body: body ? JSON.stringify(body) : undefined });
        return await response.json();
    } catch (error) { console.error(error); }
}

const EmailForm = () => {
    // const html = getAppStateHtml();
    const { html } = useContext(HTMLContext);
    const defaultForm = {
        subject: "",
        message: "",
        name: "",
        email: "",
        phone: "",
    }
    const defaultShowHelp = {
        subject: false,
        message: false,
        name: false,
        email: false,
        phone: false,
    }
    const [response, setResponse] = useState<iResponse>();
    const [showHelp, setShowHelp] = useState<iDefaultShowHelp>(defaultShowHelp);
    const [form, setForm] = useState<iForm>(defaultForm);
    const handleChange = (key: string):ChangeEventHandler<HTMLInputElement> => (e) => {
        switch (key) {
            case "message": {
                setForm({ ...form, message: e.target.value })
                break;
            }
            case "name": {
                setForm({ ...form, name: e.target.value })
                break;
            }
            case "email": {
                setForm({ ...form, email: e.target.value })
                break;
            }
            case "subject": {
                setForm({ ...form, subject: e.target.value })
                break;
            }
            case "phone": {
                setForm({ ...form, phone: e.target.value })
                break;
            }
            default: { }
        }
    }
    const handleBlur = (key: string):FocusEventHandler<HTMLInputElement> => (e) => {
        switch (key) {
            case "message": {
                const length = e.target.value.length;
                setShowHelp({ ...showHelp, message: length < 1 || length > 299 })
                break;
            }
            case "name": {
                const length = e.target.value.length;
                setShowHelp({ ...showHelp, name: length < 1 })
                break;
            }
            case "email": {
                const iDot = e.target.value.lastIndexOf(".")
                const iSign = e.target.value.indexOf("@")
                setShowHelp({ ...showHelp, email: iDot == -1 || iSign == -1 || iDot < iSign })
                break;
            }
            default: { }
        }
    }
    const handleSubmit:FormEventHandler = async (e) => {
        e.preventDefault();
        try {
            const res: iResponse = await fetcher('/api/message', 'POST', form);
            if (!res) throw new Error("submit email return falsi");
            setResponse(res);
            res.success && setForm(defaultForm);
        } catch (error: any) { console.error(error); }
    }
    return (
        <>
            <p>{dictionary.formMandatoryFields[html.lang]}</p>
            <form onSubmit={handleSubmit}>
                <CustomInput
                    title={dictionary.formFieldSubject[html.lang]}
                    type={"text"}
                    handleBlur={handleBlur("subject")}
                    placeholder={"business"}
                    handleChange={handleChange("subject")}
                    description={dictionary.formDescriptionSubject[html.lang]}
                    hasError={showHelp["subject"]}
                    value={form.subject}
                />
                <CustomInput
                    title={dictionary.formFieldMessage[html.lang]}
                    type={"text"}
                    required
                    handleBlur={handleBlur("message")}
                    placeholder={"Hi, I would like to have business with you..."}
                    handleChange={handleChange("message")}
                    description={dictionary.formDescriptionMessage[html.lang]}
                    hasError={showHelp["message"]}
                    value={form.message}
                />
                <CustomInput
                    title={dictionary.formFieldName[html.lang]}
                    type={"text"}
                    required
                    handleBlur={handleBlur("name")}
                    placeholder={"Jack Banks"}
                    handleChange={handleChange("name")}
                    description={dictionary.formDescriptionName[html.lang]}
                    hasError={showHelp["name"]}
                    value={form.name}
                />
                <CustomInput
                    title={dictionary.formFieldEmail[html.lang]}
                    type={"email"}
                    required
                    handleBlur={handleBlur("email")}
                    placeholder={"user@domain.com"}
                    handleChange={handleChange("email")}
                    description={dictionary.formDescriptionEmail[html.lang]}
                    hasError={showHelp["email"]}
                    value={form.email}
                />
                <CustomInput
                    title={dictionary.formFieldPhone[html.lang]}
                    type={"tel"}
                    handleBlur={handleBlur("phone")}
                    handleChange={handleChange("phone")}
                    description={dictionary.formDescriptionPhone[html.lang]}
                    hasError={showHelp["phone"]}
                    value={form.phone}
                />

                <div className={styles.submit}>
                    <CustomBtn
                        type="submit"
                        className={styles.submitBtn}
                        text={dictionary.formSubmit[html.lang]}
                        status={`response ${!response ?
                            'submit' : response.success ?
                                'success' :
                                'failure'
                            }`}
                    />
                </div>
            </form>
        </>
    )
}

export default EmailForm;