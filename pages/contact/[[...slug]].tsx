import React, { ReactElement } from 'react';
import styles from '../../styles/Contact.module.css'
import { Layout, PageHeadWithImage, EmailForm } from '../../components';
import Link from 'next/link';
import { useRouter } from 'next/router'


const CustomLink = (props: { href: string, text: string }) => {
    return (
        <a
            href={props.href}
            target='_blank'
            children={<p className={styles.linkItem}>
                <span className={styles.linkBullet}>&gt;</span>
                <span className={styles.linkText}>
                    {props.text}
                </span>
            </p>}
        />
    )
}

const Contact = () => {
    const router = useRouter();

    return (
        <div className="page">
            <div className="pageContainer">
                {router.query.slug && router.query.slug[0] === 'email'
                    ? <PageHeadWithImage
                        pageName={{ name: 'צור קשר', link: 'contact' }}
                        subPageName={{ name: 'דוא"ל', link: 'email' }}
                    />
                    : <PageHeadWithImage
                        pageName={{ name: 'צור קשר', link: 'contact' }}
                    />
                }
                <div className={styles.container}>
                    <div className={styles.contact}>
                        {router.query.slug && router.query.slug[0] === 'email'
                            ? <>
                                <h1>שליחת דוא"ל</h1>
                                <h2>רוצה לשלוח דוא"ל כבר עכשיו? אפשר לשלוח דוא"ל ממש פה.</h2>
                                <div className={styles.email}>
                                    <EmailForm />
                                </div>
                            </>
                            : <>
                                <h1>צור קשר</h1>
                                <h2>יש לך שאלה או גילית סקרנות? אפשר להתקשר או לשלוח דוא"ל. אפשר גם לשלוח הודעה בוואטסאפ או בלינקדאין.</h2>
                                <div className={styles.links}>
                                    <div>
                                        <CustomLink
                                            href='tel:+972528405624'
                                            text='חייג 052-8405624'
                                        />
                                        <Link
                                            href="/contact/email"
                                            children={
                                                <p className={styles.linkItem}>
                                                    <span className={styles.linkBullet}>&gt;</span>
                                                    <span className={styles.linkText}>שלח דוא"ל</span>
                                                </p>
                                            }
                                        />
                                    </div>
                                    <div>
                                        <CustomLink
                                            href={`https://api.whatsapp.com/send?phone=+972528405624&text=${decodeURI('שלום סימן טוב אשמח לשמוע עוד')}`}
                                            text='שלח וואטסאפ'
                                            
                                        />
                                        <CustomLink
                                            href='https://www.linkedin.com/in/siman-tov-jamberu/'
                                            text="סימן טוב ג'מברו בלינקדאין"
                                        />
                                    </div>
                                </div>
                            </>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
Contact.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;
export default Contact;