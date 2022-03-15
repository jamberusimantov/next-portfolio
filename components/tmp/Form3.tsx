import React, { FormEvent, useState } from 'react';
import styles from '../styles/Home.module.css'
import { Btn } from '../../dir/elements';
import { fetcher } from '../../dir/functions';
import { response, formConfig, formData } from '../../dir/types';

const mockFormData = {
    name: '',
    description: '',
    url: '',
    image: '',
    file: '',
    subject: '',
    message: '',
    _id: '',
}

const Form = (props: {
    config: formConfig,
    setConfig?: (schema: string) => void,
}) => {
    const [formData, setFormData] = useState<formData>(mockFormData)
    const [docs, setDocs] = useState<formData[]>([])

    const imageChange = (isImage: boolean) => (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = () => {
                    const fileSize = ((file.size / 1024)); //KB
                    const limit = props.config.schema === 'resumes' ? 250 : 10;
                    if (file.name != "item" && typeof file.name != "undefined" && fileSize <= limit) {
                        isImage
                            ? setFormData({ ...formData, image: reader.result?.toString() })
                            : setFormData({ ...formData, file: reader.result?.toString() })
                        return
                    }
                    alert('file too big, MAX size is 10KB, Please resize!!!')
                    e.target.value = ''
                    isImage
                        ? setFormData({ ...formData, image: '' })
                        : setFormData({ ...formData, file: '' })
                }
                return reader.readAsDataURL(file);
            }
        }
    }
    const ImagePreview = () => {
        return (
            <div className={styles.fileContainer}>
                <img
                    className={styles.filePreview}
                    src={formData?.image}
                    alt=""
                />
                <Btn
                    svg={'close'}
                    className={`${styles.fileUnSelectBtn} btn`}
                    onClick={() => {
                        (document.getElementById(`imageInput_${props.config.schema}`) as HTMLInputElement).value = '';
                        setFormData({ ...formData, image: '' })
                    }}
                />
            </div>
        )
    }
    const submit = async (e: FormEvent) => {
        e.preventDefault();
        const method = (document.getElementById(`methodSelect_${props.config.schema}`) as HTMLSelectElement).value
        const url = (method === 'PUT' || method === 'DELETE')
            ? `/api/${props.config.schema}?id=${formData?._id}`
            : `/api/${props.config.schema}`;
        console.log({ formData });
        console.log({ url });
        const response: response = await fetcher(url, method, method !== 'GET' ? formData : undefined)
        response.error && console.log(response.error)
        if (response.success) {
            setDocs(response.data);
            setFormData(mockFormData);
        }
    }
    const FormControl = () => {
        return (
            <div>
                <select id={`methodSelect_${props.config.schema}`}>
                    <option value='GET'>GET</option>
                    <option value='POST'>POST</option>
                    <option value='PUT'>PUT</option>
                    <option value='DELETE'>DELETE</option>
                </select>
                {docs?.length
                    ? <select id={`docSelect_${props.config.schema}`}
                        onChange={(e) => {
                            setFormData(docs[Number(e.target.value)])
                            // if (e.target.value) {
                            //     console.log(e.target.value);
                            //     return
                            // }
                            // setFormData(e.target.value ? docs[Number(e.target.value)] : mockFormData)
                            // props.docs && setFormData(props.docs[Number(e.target.value)])


                            // console.log(e.target);
                            // if (props.docs) {
                            //     setFormData(props.docs[Number(e.target.value)])
                            // //     e.target.value
                            // //         ? setFormData(props.docs[Number(e.target.value)])
                            // //         : setFormData(mockFormData)
                            // }
                        }}
                    >
                        <option></option>
                        {React.Children.toArray(docs?.map((doc, i) => {
                            return (
                                <option
                                    value={i}
                                    key={i.toString()}
                                >
                                    {doc.name}
                                </option>
                            )
                        }))}
                    </select>
                    : null
                }
            </div>
        )
    }
    const Table = (data: { data: formData[] }) => {
        // const arr = React.Children.toArray(data.data).map((obj, i) => i)
        console.log(data.data);

        return (
            <>
                {
                // React.Children.toArray(data.data).map((obj, i) => i)
                }
            </>
        )
    }

    return (
        <div className={styles.formContainer}>
            <form onSubmit={submit} className={styles.form}>
                <Btn
                    svg={props.config.schema}
                    className='svg'
                />
                {props.config.admin && <FormControl />}
                {formData?._id &&
                    <input
                        id={`idInput_${props.config.schema}`}
                        className={styles.input}
                        value={formData?._id}
                        readOnly
                        type='text'
                    />
                }
                <input
                    placeholder='Name'
                    id={`nameInput_${props.config.schema}`}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={styles.input}
                    value={formData?.name}
                    type='text'
                />
                {props.config.schema === 'websites' &&
                    <input
                        placeholder='Url'
                        id={`urlInput_${props.config.schema}`}
                        onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                        className={styles.input}
                        value={formData?.url}
                        type='text'
                    />
                }
                {props.config.schema !== 'contact' && <>
                    <textarea
                        placeholder='Description'
                        id={`descriptionInput_${props.config.schema}`}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        className={styles.input}
                        value={formData?.description}
                        maxLength={500}
                        rows={10}
                        cols={30}
                    />
                    <input
                        id={`imageInput_${props.config.schema}`}
                        onChange={imageChange(props.config.schema === 'websites')}
                        className={`${styles.input} ${styles.addBtn}`}
                        type='file'
                        accept={props.config.schema === 'websites' ? 'image/*' : undefined}
                    />
                </>
                }
                {props.config.schema === 'contact' && <>
                    <input
                        placeholder='Subject'
                        id={`subjectInput_${props.config.schema}`}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className={styles.input}
                        value={formData?.subject}
                        type='text'
                    />
                    <textarea
                        placeholder='Message'
                        id={`messageInput_${props.config.schema}`}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className={styles.input}
                        value={formData?.message}
                        maxLength={500}
                        rows={10}
                        cols={30}
                    />
                </>}
                <Btn
                    submit={true}
                    svg={'blue-send'}
                    id={`submit_${props.config.schema}`}
                    className={`${styles.submitBtn} btn`}
                />
            </form>
            {formData?.image && <ImagePreview />}
            <Table data={docs} />
        </div>
    )
}
export default Form;