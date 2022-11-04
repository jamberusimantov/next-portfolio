import React, { useState, useContext } from 'react';
import styles from './Page.module.css';
import CustomLink from '../CustomLink';
import dictionary from '../../dir/dictionary';
import HTMLContext from '../../contexts/htmlContext';
import Hamburger from './Hamburger';


export const Menu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const { html } = useContext(HTMLContext);
    return (
        <div className={styles.menu}>
            <Hamburger
                isMenuOpen={isMenuOpen}
                setIsMenuOpen={setIsMenuOpen}
            />
            <ul className={`${styles.menuList} ${isMenuOpen ? styles.active : ''}`}>
                <li>
                    <CustomLink
                        href={'/profile'}
                        title={dictionary.profile["en-US"]}
                        children={dictionary.profile[html.lang]}
                        className="white"
                    />
                </li>
                <hr className={styles.hr} />
                <li>
                    <CustomLink
                        href={'/projects'}
                        title={dictionary.projects["en-US"]}
                        children={dictionary.projects[html.lang]}
                        className="white"
                    />
                </li>
                <hr className={styles.hr} />
                <li>
                    <CustomLink
                        href={'/contact'}
                        title={dictionary.contact["en-US"]}
                        children={dictionary.contact[html.lang]}
                        className="white"
                    />
                </li>
                <hr className={styles.hr} />
            </ul>
        </div>
    );
};

const Decoration = () => <span className={"decoration"}>&gt;</span>;

export const Breadcrumbs = (props: { pageName: string }) => {
    const { html } = useContext(HTMLContext);
    return (
        <div className={styles.breadcrumbs}>
            <CustomLink
                href={'/'}
                title={"Homepage"}
                children={dictionary.homepage[html.lang]}
                className="white"
            />
            <Decoration />
            <CustomLink
                href={`/${props.pageName}`}
                disabled
                children={dictionary[props.pageName][html.lang]}
            />
        </div>
    );
};