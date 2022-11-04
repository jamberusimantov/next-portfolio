import React, { useContext, ReactElement } from 'react';
import styles from '../styles/Services.module.css';
import dictionary from '../dir/dictionary';
import HTMLContext from '../contexts/htmlContext';
import Page from '../components/Page';
import Layout from '../components/Layout';
import CustomLink from '../components/CustomLink';


const Contact = () => {
    const { html } = useContext(HTMLContext);
    return (
        <Page
            pageName="contact"
            children={
                <div className={styles.container}>
                    <div className={styles.contact}>
                        <h1>{dictionary.contact[html.lang]}</h1>
                        <h2>{dictionary.contactTitle[html.lang]}</h2>
                        <Menu />
                    </div>
                </div>
            }
        />
    );
}

const Decoration = () => <span className={"decoration"}>&gt;</span>;

const Menu = () => {
    const { html } = useContext(HTMLContext);
    
    return (
        <div className={styles.links}>
            <ul>
                <li>
                    <Decoration />
                    <CustomLink
                        href={"tel:+972528405624"}
                        title={dictionary.call[html.lang] + ' 052-8405624'}
                        children={dictionary.call[html.lang] + ' 052-8405624'}
                    />
                </li>
                <li>
                    <Decoration />
                    <CustomLink
                        href={"/contactByEmail"}
                        title={dictionary.contactByEmail[html.lang]}
                        children={dictionary.contactByEmail[html.lang]}
                    />
                </li>
            </ul>
            <ul>
                <li>
                    <Decoration />
                    <CustomLink
                        href={`https://api.whatsapp.com/send?phone=+972528405624&text=${decodeURI(dictionary.whatsappGreeting[html.lang])}`}
                        title={dictionary.whatsapp[html.lang]}
                        children={dictionary.whatsapp[html.lang]}
                    />
                </li>
                <li>
                    <Decoration />
                    <CustomLink
                        href={"https://www.linkedin.com/in/siman-tov-jamberu/"}
                        title={dictionary.linkedin[html.lang]}
                        children={dictionary.linkedin[html.lang]}
                    />
                </li>
            </ul>
        </div>
    );
};

Contact.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;

export default Contact;