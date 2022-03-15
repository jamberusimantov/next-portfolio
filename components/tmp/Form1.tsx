import React, { FormEvent, useRef, useState } from 'react';
import styles from '../styles/Home.module.css'
import { Btn } from '../../dir/elements';
import { fetcher } from '../../dir/functions';
import { stringKeysObject, response, formConfig } from '../../dir/types';


const Form = (props: { config: formConfig, setConfig?: (schema: string) => void }) => {
    const [websitesForm, setWebsitesForm] = useState<stringKeysObject>({})


    const [formData, setFormData] = useState<stringKeysObject>({})
    const [imagePreview, setImagePreview] = useState<string>('')
    const [method, setMethod] = useState<string>('POST')
    const doc = { _id: '' }
    const inputsRefs: stringKeysObject = {}

    const submit = async (e: FormEvent) => {
        e.preventDefault();
        const url = method === 'DELETE' || 'PUT'
            ? `/api/${props.config.schema}?id=${doc._id}`
            : `/api/${props.config.schema}`;
        const response: response = await fetcher(url, method, formData)
        response.error && console.log({ response })
        if (response.success) {
            document.getElementById(`reset_${props.config.schema}`)?.click();
            setFormData({})
        }
    }
    const ImagePreview = (props: { isPreview: string }) => {
        return (
            <div className={styles.fileContainer}>
                {props.isPreview &&
                    <>
                        <img
                            className={styles.filePreview}
                            src={formData.image}
                            alt=""
                        />
                        <Btn
                            svg={'close'}
                            className={`${styles.fileUnSelectBtn} btn`}
                            onClick={() => {
                                inputsRefs[imagePreview].current.value = ''
                                setImagePreview('');
                            }}
                        />
                    </>}
            </div>
        )
    }


    const updateState = (data: { key: string, value: string | ArrayBuffer | null }) => {
        const newFormData = formData;
        newFormData[data.key] = data.value;
        setFormData(newFormData);
    }
    const fileChangeHandler = (key: string, index: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = () => {
                    const fileSize = ((file.size / 1024)); //KB
                    const limit = props.config.schema === 'resumes' ? 250 : 10;
                    if (file.name != "item" && typeof file.name != "undefined" && fileSize <= limit) {
                        updateState({ key, value: reader.result })
                        key === 'image' && setImagePreview(index)
                        return
                    }
                    alert('file too big, MAX size is 10KB, Please resize!!!')
                    e.target.value = ''
                    updateState({ key, value: '' })
                }
                return reader.readAsDataURL(file);
            }
            updateState({ key, value: '' })
        }
    }
    const textChangeHandler = (key: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        updateState({ key: key, value: e.target.value })
    }

    const FormControl = () => {

        return (
            <div>
                <label>
                    <input
                        type='radio'
                        checked={method === 'GET'}
                        onChange={() => setMethod('GET')}
                    />
                    GET
                </label>
                <label>
                    <input
                        type='radio'
                        checked={method === 'POST'}
                        onChange={() => setMethod('POST')}
                    />
                    POST
                </label>
                <label>
                    <input
                        type='radio'
                        checked={method === 'PUT'}
                        onChange={() => setMethod('PUT')}
                    />
                    PUT
                </label>
                <label>
                    <input
                        type='radio'
                        checked={method === 'DELETE'}
                        onChange={() => setMethod('DELETE')}
                    />
                    DELETE
                </label>
            </div>
        )
    }
    const Inputs = (data: { inputsArr: any[] }) => {

        return (
            <>
                {React.Children.toArray(data.inputsArr.map((input, i) => {
                    switch (input.type) {
                        case 'file': {
                            const ref = useRef<HTMLInputElement>(null)
                            inputsRefs[i.toString()] = input.value === 'image'
                                ? ref : undefined;

                            return (<input
                                ref={inputsRefs[i.toString()]}
                                key={i.toString()}
                                onChange={fileChangeHandler(props.config.schema === 'websites'
                                    ? 'image'
                                    : 'file'
                                    , i.toString())
                                }
                                className={`${styles.input} ${styles.addBtn}`}
                                type={input.type}
                                accept={props.config.schema === 'websites'
                                    ? 'image/*'
                                    : 'application/pdf'
                                }
                            />)
                        }
                        case 'textarea': {
                            return (<textarea
                                key={i.toString()}
                                placeholder={input.placeholder}
                                onChange={textChangeHandler(input.name)}
                                className={styles.input}
                                required={input.required}
                                maxLength={500}
                                rows={10}
                                cols={30}
                            />)
                        }
                        default: {
                            return (<input
                                key={i.toString()}
                                placeholder={input.placeholder}
                                onChange={textChangeHandler(input.name)}
                                className={styles.input}
                                required={input.required}
                                type={input.type}
                            />)
                        }
                    }
                }))}
            </>)
    }

    return (
        <div className={styles.formContainer}>

            <form onSubmit={submit} className={styles.form}>
                <input
                    placeholder='Name'
                    onChange={textChangeHandler('name')}
                    className={styles.input}
                    required
                    type='text'
                />
            </form>








            <form
                onSubmit={submit}
                className={styles.form}
            >
                <Btn
                    svg={props.config.schema}
                    className={`${props.config.admin &&
                        styles.schemaToggleBtn} 
                        svg`
                    }
                    onClick={() => {
                        if (props.setConfig) {
                            props.setConfig(props.config.schema);
                            document.getElementById(`reset_${props.config.schema}`)?.click();
                            setFormData({});
                            setImagePreview('');
                        }
                    }}
                />

                {props.config.admin && <FormControl />}

                <Inputs inputsArr={props.config.inputs} />

                <Btn
                    submit={true}
                    svg={'blue-send'}
                    className={`${styles.submitBtn} btn`}
                />

                <Btn
                    reset={true}
                    svg={'close'}
                    id={`reset_${props.config.schema}`}
                    className={styles.resetBtn}
                />
            </form>

            <ImagePreview isPreview={imagePreview} />
        </div>
    )
}
export default Form;
