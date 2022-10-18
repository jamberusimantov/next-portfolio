import React, { useContext } from 'react';
import styles from '../styles/Services.module.css'
import Page from '../components/Page';
import dictionary from '../dir/dictionary'
// import { getAppStateHtml } from '../store/hooks'
import { HTMLContext } from '../pages/_app'
import { iPage } from 'components/Page';


const Archive:iPage = () => <Page
    pageName="archive"
    children={<PageContent />}
/>

const PageContent = () => {
    // const html = getAppStateHtml();
    const { html } = useContext(HTMLContext);
    return (
        <div className={styles.container}>
            <div className={styles.archive}>
                <h1>
                    {dictionary.archive[html.lang]}
                </h1>
            </div>
        </div>
    )
}

Archive.getLayout = Page.getLayout;

export default Archive;