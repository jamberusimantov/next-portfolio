import React, { useContext, ReactElement } from 'react';
import styles from '../styles/Profile.module.css';
import HTMLContext from '../contexts/htmlContext';
import dictionary from '../dir/dictionary';
import Page from '../components/Page';
import Layout from '../components/Layout';


const Profile = () => {
    const { html } = useContext(HTMLContext);
    return (
        <Page
            pageName="profile"
            imageClassName={styles.bgImage}
            children={
                <div className={styles.container}>
                    <div className={styles.about}>
                        <h1>{dictionary.creator[html.lang]}</h1>
                        <p>{dictionary.profileText[html.lang]}</p>
                    </div>
                </div>
            }
        />
    );
};

Profile.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;

export default Profile;