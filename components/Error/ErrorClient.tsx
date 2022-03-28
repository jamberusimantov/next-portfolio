import React from 'react'
import styles from './Error.module.css'
import { useRouter } from 'next/router'
import Link from 'next/link'

const ErrorClient = () => {

    const router = useRouter();

    return (
        <div className={styles.errorContainer}>
            <h1 className={styles.title}>
                Oops... <span>Bad request!</span>
            </h1>
            <p className={styles.path}>
                <code>
                    https://portfoio-simantov.herokuapp.com{router.asPath}
                </code>
            </p>

            <Link
                href='/'
                children={<p className={styles.link}>דף הבית</p>}
            />

            <Link
                href='/sitemap'
                children={<p className={styles.link}>מפת האתר</p>}
            />

        </div>
    )
}

export default ErrorClient;