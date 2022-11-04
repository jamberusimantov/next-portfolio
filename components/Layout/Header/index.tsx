import React from 'react';
import styles from './index.module.css';
import Image from 'next/image';


const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.headerTop}>
                <div className={styles.headerTopContainer}>
                    <div className={styles.logo}>
                        <div className={styles.logoContainer}>
                            <Image src='/assets/svg/web-development.svg' layout='fill' />
                        </div>
                        <span className={styles.name}>Siman Tov Jamberu</span>
                    </div>
                </div>
            </div>
        </header >
    );
};

export default Header;