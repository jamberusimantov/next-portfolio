import React, { useContext } from 'react';
import styles from './Error.module.css';
import { useRouter } from 'next/router';
import CustomLink from '../CustomLink';
import dictionary from '../../dir/dictionary';
import HTMLContext from '../../contexts/htmlContext';


interface iErrorProps { pageName: keyof { "pageNotFound": "", "badRequest": "" } }

const Error = (props: iErrorProps) => {
    const { html } = useContext(HTMLContext);
    return (
        <div className={styles.errorContainer}>
            <h1><span>Oops</span>...{dictionary[props.pageName][html.lang]}</h1>
            {props.pageName == "pageNotFound"
                ? <p>https://portfoio-simantov.herokuapp.com{useRouter()?.asPath}</p>
                : <h3>Sorry for any inconvenience this may cause</h3>
            }
            <div className={styles.links}>
                <CustomLink
                    href='/'
                    title='Homepage'
                    children={<div className={styles.link}>Homepage</div>}
                />
            </div>
        </div>
    );
};

export default Error;