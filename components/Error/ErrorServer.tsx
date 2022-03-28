import React from 'react'
import styles from './Error.module.css'
import Link from 'next/link'

const ErrorServer = () => {

    return (
        <div className={styles.errorContainer}>

            <div className={styles.errorTitleContainer}>
                <h1 className={styles.title}>
                    Oops... <span>Server error!</span>
                </h1>
            </div>

            <h3 className={styles.recommendationsTitle}>
                Sorry for any inconvenience this may cause, here are some other Amazing recommendations
            </h3>

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

export default ErrorServer;