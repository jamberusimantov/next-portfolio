import React, { useContext, ReactElement } from 'react';
import styles from '../styles/Services.module.css';
import dictionary from '../dir/dictionary';
import HTMLContext from '../contexts/htmlContext';
import Layout from '../components/Layout';
import Page from '../components/Page';


const Archive = () => {
    const { html } = useContext(HTMLContext);
    return (
        <Page
            pageName='archive'
            children={
                <div className={styles.container}>
                    <div className={styles.archive}>
                        <h1>{dictionary.archive[html.lang]}</h1>
                    </div>
                </div>
            }
        />
    );
};

Archive.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;

export default Archive;