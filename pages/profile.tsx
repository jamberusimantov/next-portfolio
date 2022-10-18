import React, { useContext } from 'react';
import styles from '../styles/Profile.module.css'
import CustomLink from '../components/CustomLink';
import Page from '../components/Page';
import { iPage } from 'components/Page';
import dictionary from '../dir/dictionary'
// import { getAppStateHtml } from '../store/hooks'
import { HTMLContext } from '../pages/_app'


const Profile: iPage = () => <Page
    pageName="profile"
    imageClassName={styles.bgImage}
    children={<PageContent />}
/>

const PageContent = () => {
    const { html } = useContext(HTMLContext);
    // const html = getAppStateHtml();
    return (
        <div className={styles.container}>
            <div className={styles.about}>
                <h1>{dictionary.creator[html.lang]}</h1>
                <p>
                    {dictionary.aboutMe1[html.lang]}
                    <strong> HTML</strong>,
                    <strong> CSS</strong>,
                    <strong> JavaScript</strong>,
                    <strong> TypeScript</strong>,
                    <strong> MongoDB</strong>,
                    <strong> ExpressJS</strong>,
                    <strong> ReactJS</strong>,
                    <strong> NodeJS</strong>,
                    <strong> Redux</strong>.
                    {dictionary.aboutMe2[html.lang]}
                    <CustomLink
                        href={'https://www.cognyte.com/'}
                        title={"Cognyte"}
                        children={<span className={"linkItem"}>{'Cognyte'}</span>}
                    />.
                    {dictionary.aboutMe3[html.lang]}
                    <strong> Ansible</strong>,
                    <strong> Jenkins</strong>,
                    <strong> Docker</strong>,
                    <strong> Linux</strong>,
                    <strong> SQL</strong>.
                    {dictionary.aboutMe4[html.lang]}
                    <span>&#128516; </span>.
                    {dictionary.aboutMe5[html.lang]}
                    <strong> BackEnd</strong>/
                    <strong> FrontEnd</strong>/
                    <strong> FullStack</strong>.
                </p>
            </div>
        </div>
    )
};

Profile.getLayout = Page.getLayout;

export default Profile;