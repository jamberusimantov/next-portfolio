import React, { ReactElement,useState, useContext  } from 'react';
import styles from './Page.module.css';
import CustomLink from '../CustomLink';
import dictionary from '../../dir/dictionary';
import HTMLContext from '../../contexts/htmlContext';
import Hamburger from './Hamburger';


const Page = (props: iPageProps) => {
    return (
        <div className="page">
            <div className={!props.homepage ? "pageContainer" : ""}>
                <div className={styles.navSection}>
                    <div className={styles.navSectionContainer}>
                        <div className={styles.nav}>
                            {
                                props.pageName ? <Breadcrumbs pageName={props.pageName} /> : <Menu />
                            }
                        </div>
                    </div>
                </div>
                {
                    props.imageClassName &&
                    <div className={`${styles.imageSection} ${props.imageClassName}`}></div>
                }
                {props.children}
            </div>
        </div>
    );
}
const Menu = () => {
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

const Breadcrumbs = (props: { pageName: keyof typeof page }) => {
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

export enum page {
    homepage = "",
    profile = "",
    projects = "",
    contact = "",
    contactByEmail = "",
    help = "",
    archive = "",
    services = "",
    messages = "",
    pageNotFound = "",
    badRequest = "",
}

interface iPageProps {
    homepage?: boolean,
    pageName?: keyof typeof page,
    imageClassName?: string,
    children?: ReactElement,
};
export default Page;