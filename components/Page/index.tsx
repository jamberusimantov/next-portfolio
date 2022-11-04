import React, { ReactElement } from 'react';
import styles from './Page.module.css'; 
import { Menu, Breadcrumbs } from './nav';


interface iPageProps {
    homepage?: boolean,
    pageName?: string,
    imageClassName?: string,
    children?: ReactElement,
};

const Page = (props: iPageProps) => {
    return (
        <div className="page">
            <div className={!props.homepage ? "pageContainer" : ""}>
                <div className={styles.navSection}>
                    <div className={styles.navSectionContainer}>
                        <div className={styles.nav}>
                            {props.pageName ? <Breadcrumbs pageName={props.pageName} /> : <Menu />}
                        </div>
                    </div>
                </div>
                {props.imageClassName && <div className={`${styles.imageSection} ${props.imageClassName}`}></div>}
                {props.children}
            </div>
        </div>
    );
}

export default Page;