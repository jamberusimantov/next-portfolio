import React, { useContext } from 'react'
import styles from './Error.module.css'
import { useRouter } from 'next/router'
import CustomLink from '../CustomLink'
import dictionary from '../../dir/dictionary';
// import { getAppStateHtml } from '../../store/hooks';
import { HTMLContext } from '../../pages/_app';


interface iErrorProps {
    pageName: keyof { "pageNotFound": "", "badRequest": "" },
}

const Error = (props: iErrorProps) => {
    const { pageName } = props;
    const router = useRouter();
    // const html = getAppStateHtml();
    const { html } = useContext(HTMLContext);

    return (
        <div className={styles.errorContainer}>
            <h1 className={styles.title}>
                <span>{dictionary[props.pageName][html.lang]}</span>
            </h1>
            {pageName == "pageNotFound"
                ? <p className={styles.path}><code>https://portfoio-simantov.herokuapp.com{router.asPath}</code></p>
                : <h3 className={styles.recommendationsTitle}>Sorry for any inconvenience this may cause</h3>
            }
            <div className={styles.links}>
                <CustomLink
                    href='/'
                    title='Homepage'
                    children={
                        <div className={styles.link}>
                            <p>Homepage</p>
                        </div>
                    } />
            </div>
        </div>
    )
}

export default Error;