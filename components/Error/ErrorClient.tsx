import React from 'react'
import styles from './Error.module.css'
import { useRouter } from 'next/router'
import { CustomBtn } from '../../dir/elements'


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
            <CustomBtn
                click={() => { router.replace('/') }}
                className='btn'
                child={{
                    name: 'home',
                    size: 35
                }}
            />
        </div>
    )
}

export default ErrorClient;