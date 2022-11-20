import React, {
    useState, useContext, ReactElement,
    ChangeEvent, ChangeEventHandler, FocusEvent,
    FocusEventHandler, FormEventHandler, Dispatch,
    SetStateAction
} from 'react';
import styles from '../styles/Services.module.css';
import dictionary from '../dir/dictionary';
import HTMLContext from '../contexts/htmlContext';
import Page from '../components/Page';
import CustomBtn from '../components/CustomBtn';
import CustomInput from '../components/CustomInput';
import Layout from "../components/Layout";


const Email = () => {
    const { html } = useContext(HTMLContext);
    const [form, setForm] = useState<iInputs>({
        subject: "",
        message: "",
        name: "",
        email: "",
        phone: "",
    });
    const [errors, setErrors] = useState<iHasError>({
        subject: false,
        message: false,
        name: false,
        email: false,
        phone: false,
    });
    const [response, setResponse] = useState<iResponse>();
    const handleChange = (key: string) => (e: ChangeEvent) => {
        const value = (e.target as HTMLInputElement).value;
        switch (key) {
            case "message": {
                setForm({ ...form, message: value })
                break;
            }
            case "name": {
                setForm({ ...form, name: value })
                break;
            }
            case "email": {
                setForm({ ...form, email: value })
                break;
            }
            case "subject": {
                setForm({ ...form, subject: value })
                break;
            }
            case "phone": {
                setForm({ ...form, phone: value })
                break;
            }
            default: { }
        }
    };
    const handleBlur = (key: string) => (e: FocusEvent) => {
        const value = (e.target as HTMLInputElement).value;
        switch (key) {
            case "message": {
                setErrors({ ...errors, message: value.length < 1 || value.length > 299 })
                break;
            }
            case "name": {
                setErrors({ ...errors, name: value.length < 1 })
                break;
            }
            case "email": {
                const iDot = value.lastIndexOf(".")
                const iSign = value.indexOf("@")
                setErrors({ ...errors, email: iDot == -1 || iSign == -1 || iDot < iSign })
                break;
            }
            default: { }
        }
    };
    const handleSubmit: FormEventHandler = async (e) => {
        e.preventDefault();
        try {
            const res: iResponse = await fetcher('http://localhost:3000/api/message', 'POST', form);
            if (!res) throw new Error("submit email return falsi");
            setResponse(res);
            res.success && setForm({
                subject: "",
                message: "",
                name: "",
                email: "",
                phone: "",
            });
        } catch (error: any) { console.error(error); }
    };
    return (
        <Page
            pageName="contactByEmail"
            children={
                <div className={styles.container}>
                    <div className={styles.contact}>
                        <h1>{dictionary.contactByEmail[html.lang]}</h1>
                        <h2>{dictionary.emailTitle[html.lang]}</h2>
                        <p>{dictionary.formMandatoryFields[html.lang]}</p>
                        <Form
                            form={{ state: form, setState: setForm }}
                            errors={{ state: errors, setState: setErrors }}
                            handleChange={handleChange}
                            handleBlur={handleBlur}
                            handleSubmit={handleSubmit}
                            response={response}
                        />
                    </div>
                </div>
            }
        />
    );
}

const Form = (props: iForm) => {
    const { html } = useContext(HTMLContext);
    const status = !props.response ?
        'submit'
        : props.response.success ?
            'success'
            : 'failure';
    return (
        <div className={styles.email}>
            <form onSubmit={props.handleSubmit}>
                <CustomInput
                    title={dictionary.formFieldSubject["en-US"]}
                    type={"text"}
                    handleBlur={props.handleBlur && props.handleBlur("subject")}
                    placeholder={"business"}
                    handleChange={props.handleChange("subject")}
                    description={dictionary.formDescriptionSubject[html.lang]}
                    hasError={props.errors?.state.subject}
                    value={props.form.state.subject}
                />
                <CustomInput
                    title={dictionary.formFieldMessage["en-US"]}
                    type={"text"}
                    required
                    handleBlur={props.handleBlur && props.handleBlur("message")}
                    placeholder={"Hi, I would like to have business with you..."}
                    handleChange={props.handleChange("message")}
                    description={dictionary.formDescriptionMessage[html.lang]}
                    hasError={props.errors?.state.message}
                    value={props.form.state.message}
                />
                <CustomInput
                    title={dictionary.formFieldName["en-US"]}
                    type={"text"}
                    required
                    handleBlur={props.handleBlur && props.handleBlur("name")}
                    placeholder={"Jack Banks"}
                    handleChange={props.handleChange("name")}
                    description={dictionary.formDescriptionName[html.lang]}
                    hasError={props.errors?.state.name}
                    value={props.form.state.name}
                />
                <CustomInput
                    title={dictionary.formFieldEmail["en-US"]}
                    type={"email"}
                    required
                    handleBlur={props.handleBlur && props.handleBlur("email")}
                    placeholder={"user@domain.com"}
                    handleChange={props.handleChange("email")}
                    description={dictionary.formDescriptionEmail[html.lang]}
                    hasError={props.errors?.state.email}
                    value={props.form.state.email}
                />
                <CustomInput
                    title={dictionary.formFieldPhone["en-US"]}
                    type={"tel"}
                    handleBlur={props.handleBlur && props.handleBlur("phone")}
                    handleChange={props.handleChange("phone")}
                    description={dictionary.formDescriptionPhone[html.lang]}
                    hasError={props.errors?.state.phone}
                    value={props.form.state.phone}
                />

                <div className={styles.submit}>
                    <CustomBtn
                        type="submit"
                        className={styles.submitBtn}
                        title={"Submit"}
                        text={!props.response ?
                            'submit'
                            : props.response.success ?
                                'success'
                                : 'failure'}
                        status={`response ${!props.response ?
                            'submit'
                            : props.response.success ?
                                'success'
                                : 'failure'
                            }`}
                    />
                </div>
            </form>
        </div>
    );
};
interface iInputs {
    subject: string,
    message: string,
    name: string,
    email: string,
    phone: string,
};

interface iHasError {
    subject: boolean,
    message: boolean,
    name: boolean,
    email: boolean,
    phone: boolean,
};

interface iResponse {
    success: boolean,
    data: any,
    error?: string,
    message?: string,
};
interface iForm {
    form: { state: iInputs, setState: Dispatch<SetStateAction<iInputs>> },
    errors?: { state: iHasError, setState: Dispatch<SetStateAction<iHasError>> },
    response?: iResponse,
    handleChange: (key: string) => ChangeEventHandler<HTMLInputElement>,
    handleBlur?: (key: string) => FocusEventHandler<HTMLInputElement>,
    handleSubmit: FormEventHandler<Element>,
};

export const fetcher = async (url: string, method = 'GET', body?: object): Promise<any> => {
    try {
        const response = await fetch(url, { method, body: body ? JSON.stringify(body) : undefined });
        return await response.json();
    } catch (error) { console.error(error); }
}

Email.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;

export default Email;
