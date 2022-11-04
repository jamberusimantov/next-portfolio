import React, { useContext, ReactElement } from 'react';
import styles from '../styles/Services.module.css';
import HTMLContext from '../contexts/htmlContext';
import dictionary from '../dir/dictionary';
import Page from '../components/Page';
import Layout from "../components/Layout";
import CustomLink from '../components/CustomLink';


const Help = () => {
    const { html } = useContext(HTMLContext);
    return (
        <Page
            pageName="help"
            children={
                <div className={styles.container}>
                    <div className={styles.help}>
                        <h1>{dictionary.help[html.lang]}</h1>
                        <p>{dictionary.helpTitle[html.lang]}</p>
                        <h2>{dictionary.helpDocumentsTitle[html.lang]}</h2>
                        <p>{dictionary.helpDocumentsText[html.lang]}</p>
                        <h2>{dictionary.helpQuestionsTitle[html.lang]}</h2>
                        <p>{dictionary.helpQuestionsText[html.lang]}
                            <CustomLink
                                href='/contactByEmail'
                                title={dictionary.contactByEmail[html.lang]}
                                children={dictionary.contactByEmail[html.lang]}
                            />
                        </p>
                    </div>
                </div>
            }
        />
    );
};

Help.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;

export default Help;