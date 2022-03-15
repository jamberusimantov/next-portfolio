import React from 'react'
import styles from './Error.module.css'
import { CustomLink } from '../../dir/elements'


const ErrorServer = () => {

    return (
        <div className={`${styles.container} ${styles.errorContainer}`}>

            <div className={styles.errorTitleContainer}>
                <h1 className={styles.title}>
                    Oops... <span>Server error!</span>
                </h1>
            </div>

            <h3 className={styles.recommendationsTitle}>
                Sorry for any inconvenience this may cause, here are some other Amazing recommendations
            </h3>

            <CustomLink
                url="https://memo-simantov.herokuapp.com/"
                className={styles.link}
                child={{
                    name: 'pencil',
                    text: 'Memo',
                    size: 35
                }}
            />

            <CustomLink
                url='https://weather-simantov.herokuapp.com/'
                className={styles.link}
                child={{
                    name: 'weather',
                    text: 'Weather',
                    size: 35
                }}
            />

            <CustomLink
                url='https://jamberusimantov.github.io/snake/'
                className={styles.link}
                child={{
                    name: 'game',
                    text: 'Snake',
                    size: 35
                }}
            />

        </div>
    )
}

export default ErrorServer;