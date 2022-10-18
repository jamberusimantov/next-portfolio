import React, { useContext } from 'react';
import styles from '../styles/Services.module.css'
import Page from '../components/Page';
import EmailForm from '../components/EmailForm';
import dictionary from '../dir/dictionary'
// import { getAppStateHtml } from '../store/hooks'
import { HTMLContext } from '../pages/_app'
import { iPage } from 'components/Page';

const Email: iPage = () => <Page
    pageName="contactByEmail"
    children={<PageContent />}
/>;


const PageContent = () => {
    // const html = getAppStateHtml();
    const { html } = useContext(HTMLContext);
    return (
        <div className={styles.container}>
            <div className={styles.contact}>
                <h1>{dictionary.contactByEmail[html.lang]}</h1>
                <h2>{dictionary.emailText[html.lang]}</h2>
                <div className={styles.email}>
                    <EmailForm />
                </div>
            </div>
        </div>
    );
}

Email.getLayout = Page.getLayout;

export default Email;