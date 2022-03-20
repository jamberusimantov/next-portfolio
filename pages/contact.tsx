import React, { ReactElement } from 'react';
import styles from '../styles/Contact.module.css'
import { Layout, Form } from '../components';
import Image from 'next/image';


const Contact = () => {

    return (
        <div className='pageContainer'>
            <div className='pageTitle'>
                <h2>צור קשר</h2>
            </div>
            <div className='pageBody'>
                <div className={styles.contactGridContainer}>
                    <div className={styles.contactGrid}>
                        <div className={styles.contactGridImageContainer}>
                            <div className={styles.contactGridImage}>
                                <Image src={`/assets/profile/profile0.jpg`} layout='fill' priority />
                            </div>
                        </div>
                        <div className={styles.contactGridFormContainer}>
                            <Form className={styles.form} textarea={true} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
Contact.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;
export default Contact