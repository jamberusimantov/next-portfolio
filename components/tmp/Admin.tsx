import React, { useState, useMemo, useCallback } from 'react';
import getConfig from 'next/config';
import Form from './Form3'
import { formData, stringKeysObject } from '../../dir/types';
import styles from '../styles/Home.module.css'

const Admin = () => {
    // const [schema, setSchema] = useState('websites')
    // // const [docs, setDocs] = useState<formData[]>([])
    // const { publicRuntimeConfig } = getConfig();

    return (
        <div id='admin'>
{/* 
            <Form
                config={{ schema, admin: true }}
                setConfig={setSchema}
                docs={docs}
                setDocs={setDocs}
            /> */}

        </div>
    )
}
export default Admin