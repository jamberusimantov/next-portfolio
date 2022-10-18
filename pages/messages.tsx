import React from 'react';
import styles from '../styles/Message.module.css'
import Page from '../components/Page';
import { iPage } from 'components/Page';


const Messages: iPage = () => <Page
    pageName="messages"
    imageClassName={styles.bgImage}
    children={<PageContent />}
/>

const PageContent = () =>
    <div className={styles.container} >
        <div className={styles.messages}>

        </div>
    </div>

Messages.getLayout = Page.getLayout;

export default Messages;