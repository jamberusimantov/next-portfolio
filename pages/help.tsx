import React, { useContext } from 'react';
import styles from '../styles/Services.module.css'
import Page from '../components/Page';
import CustomLink from '../components/CustomLink';
import dictionary from '../dir/dictionary'
// import { getAppStateHtml } from '../store/hooks'
import { HTMLContext } from '../pages/_app'
import { iPage } from 'components/Page';


const Help: iPage = () => <Page
    pageName="help"
    children={<PageContent />}
/>

const PageContent = () => {
    // const html = getAppStateHtml();
    const { html } = useContext(HTMLContext);

    const siteName = 'portfoio-simantov.herokuapp.com';
    return (
        <div className={styles.container}>
            <div className={styles.help}>
                <h1>{dictionary.help[html.lang]}</h1>
                <p><i>{siteName}</i>{dictionary.helpText[html.lang]}</p>
                <h2>{dictionary.helpDocuments[html.lang]}<i>{siteName}</i></h2>
                <p><i>{siteName}</i>{dictionary.helpDocumentsText[html.lang]}</p>
                <h2>{dictionary.helpQuestionsAndFeedback[html.lang]}<i>{siteName}</i></h2>
                <p>{dictionary.helpQuestionsAndFeedbackText[html.lang]}
                    <CustomLink
                        text={dictionary.contact[html.lang]}
                        href='/email'
                    />
                </p>
            </div>
        </div>
    )
}

Help.getLayout = Page.getLayout;

export default Help;