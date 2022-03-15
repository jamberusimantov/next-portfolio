import React, { ReactElement } from 'react';
import styles from '../styles/Contact.module.css'
import { Layout } from '../components';


const Contact = () => {

    return (
        <div className={styles.contactContainer}>
            <div className={styles.contact}>

            </div>
        </div>
    )
}
Contact.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;
export default Contact