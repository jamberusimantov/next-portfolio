import React, { useState, useContext } from 'react';
import styles from './PageHeadWithImage.module.css'
import CustomLink from '../../CustomLink';
import dictionary from '../../../dir/dictionary'
import { HTMLContext } from '../../../pages/_app'
// import { getAppStateHtml } from '../../../store/hooks'
import Hamburger from './Hamburger';


export interface iPageHeadWithImageProps {
    pageName?: string,
    imageClassName?: string,
}


const PageHeadWithImage = (props: iPageHeadWithImageProps) => {
    const { pageName, imageClassName } = props;
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
    // const html = getAppStateHtml();
    const { html } = useContext(HTMLContext);
    return (
        <>
            <div className={styles.navSection}>
                <div className={styles.navSectionContainer}>
                    <div className={styles.breadcrumbs}>
                        <CustomLink
                            href={'/'}
                            title={dictionary.homepage[html.lang]}
                            children={<span
                                className={"linkItem white"}
                                children={dictionary.homepage[html.lang]}
                            />}
                        />
                        {pageName && <CustomLink
                            href={`/${pageName}`}
                            title={dictionary[pageName][html.lang]}
                            children={[
                                <span className={"decoration"} key={0}>
                                    &gt;
                                </span>,
                                <span className={"linkItem white"} key={1}>
                                    {dictionary[pageName][html.lang]}
                                </span>
                            ]}
                        />}
                    </div>
                    {!pageName && <>
                        <Hamburger isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
                        <ul className={`${styles.nav} ${isMenuOpen ? styles.active : ''}`}>
                            <li><CustomLink
                                href={'/profile'}
                                title={dictionary.profile[html.lang]}
                                children={<span
                                    className={"linkItem white"}
                                    children={dictionary.profile[html.lang]}
                                />}
                            /></li>
                            <hr className={styles.hr} />
                            <li><CustomLink
                                href={'/projects'}
                                title={dictionary.projects[html.lang]}
                                children={<span
                                    className={"linkItem white"}
                                    children={dictionary.projects[html.lang]}
                                />}
                            /></li>
                            <hr className={styles.hr} />
                            <li><CustomLink
                                href={'/contact'}
                                title={dictionary.contact[html.lang]}
                                children={<span
                                    className={"linkItem white"}
                                    children={dictionary.contact[html.lang]}
                                />}
                            /></li>
                            <hr className={styles.hr} />
                        </ul>
                    </>}
                </div>
            </div>
            {imageClassName && <div className={`${styles.imageSection} ${props.imageClassName}`}></div>}
        </>
    )
}

export default PageHeadWithImage;