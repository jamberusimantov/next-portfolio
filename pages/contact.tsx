import React, { useContext } from 'react';
import styles from '../styles/Services.module.css'
import Page from '../components/Page';
import CustomLink from '../components/CustomLink';
import dictionary from '../dir/dictionary'
// import { getAppStateHtml } from '../store/hooks'
import { HTMLContext } from '../pages/_app'
import { iPage } from 'components/Page';


const Contact: iPage = () => <Page
    pageName="contact"
    children={<PageContent />}
/>;

const PageContent = () => {
    // const html = getAppStateHtml();
    const { html } = useContext(HTMLContext);

    return (
        <div className={styles.container}>
            <div className={styles.contact}>
                <h1>{dictionary.contact[html.lang]}</h1>
                <h2>{dictionary.contactText[html.lang]}</h2>
                <div className={styles.links}>
                    <ul>
                        <li>
                            <CustomLink
                                href={"tel:+972528405624"}
                                title={dictionary.call[html.lang] + ' 052-8405624'}
                                children={[
                                    <span className={"decoration"} key={0}>
                                        &gt;
                                    </span>,
                                    <span className={"linkItem"} key={1}>
                                        {dictionary.call[html.lang] + ' 052-8405624'}
                                    </span>
                                ]}
                            />
                        </li>
                        <li>
                            <CustomLink
                                href={"/email"}
                                title={dictionary.contactByEmail[html.lang]}
                                children={[
                                    <span className={"decoration"} key={0}>
                                        &gt;
                                    </span>,
                                    <span className={"linkItem"} key={1}>
                                        {dictionary.contactByEmail[html.lang]}
                                    </span>
                                ]}
                            />
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <CustomLink
                                href={`https://api.whatsapp.com/send?phone=+972528405624&text=${decodeURI("היי סימן טוב אשמח לשמוע עוד ")}`}
                                title={dictionary.whatsapp[html.lang]}
                                children={[
                                    <span className={"decoration"} key={0}>
                                        &gt;
                                    </span>,
                                    <span className={"linkItem"} key={1}>
                                        {dictionary.whatsapp[html.lang]}
                                    </span>
                                ]}
                            />
                        </li>
                        <li>
                            <CustomLink
                                href={"https://www.linkedin.com/in/siman-tov-jamberu/"}
                                title={dictionary.linkedin[html.lang]}
                                children={[
                                    <span className={"decoration"} key={0}>
                                        &gt;
                                    </span>,
                                    <span className={"linkItem"} key={1}>
                                        {dictionary.linkedin[html.lang]}
                                    </span>
                                ]}
                            />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

Contact.getLayout = Page.getLayout;

export default Contact;