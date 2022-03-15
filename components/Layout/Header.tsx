import React, { useState } from 'react'
import { CustomLink, Svg } from '../../dir/elements'
import Link from 'next/link'
import styles from './Layout.module.css'

const NavLinks = () => <>
    <Link
        href='/contact'
        children={
            <span className={styles.navItem}>צור קשר</span>
        }
    />
    <Link
        href='/showcases'
        children={
            <span className={styles.navItem}>עבודות</span>
        }
    />
    <Link
        href='/profile'
        children={
            <span className={styles.navItem}>פרופיל</span>
        }
    />
    <Link
        href='/'
        children={
            <span className={styles.navItem}>דף הבית</span>
        }
    />
</>

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className={styles.header}>
            <div className={styles.header_top}>

                <div className={styles.hamburger_logo_container}>
                    <div className={styles.menuBtn}>
                        <div
                            className={styles.hamburger}
                            onClick={() => { setIsMenuOpen(!isMenuOpen) }}
                        >
                            <div className={`${styles.burger} ${styles.burger1}`}></div>
                            <div className={`${styles.burger} ${styles.burger2}`}></div>
                            <div className={`${styles.burger} ${styles.burger3}`}></div>
                        </div>
                    </div>
                    <div className={styles.logoContainer}>
                        WEB
                        <CustomLink
                            url="/"
                            className={styles.logo}
                            child={{
                                name: 'web',
                                className: 'styles.svg_round',
                                size: 50,
                                samePage: true,
                            }} />
                        DEV
                    </div>
                </div>

                <div className={styles.main_nav}>
                    <nav className={styles.nav_desktop}>
                        <NavLinks />
                    </nav>
                </div>

                <div className={styles.links}>
                    <CustomLink
                        url="tel:+972528405624"
                        className={`${styles.headerBtn} ${styles.phoneBtn}`}
                        child={{
                            name: 'phone',
                            className: 'svg_square',
                            text: '052-840-5624',
                            size: 25
                        }} />
                    <CustomLink
                        url="tel:+972528405624"
                        className={`${styles.headerBtn} ${styles.phoneBtn_mobile}`}
                        child={{
                            name: 'phone',
                            className: 'svg_square',
                            size: 25
                        }} />
                    <div className={styles.socialBtns}>
                        <CustomLink
                            url='https://api.whatsapp.com/send?phone=+972528405624&text=שלום%20סימן%20טוב%20אשמח%20לדעת%20יותר'
                            className={`${styles.headerBtn} ${styles.header_whatsappBtn}`}
                            child={{
                                name: 'whatsapp',
                                size: 25
                            }} />
                        <CustomLink
                            url='https://github.com/jamberusimantov'
                            className={`${styles.headerBtn} ${styles.header_githubBtn}`}
                            child={{
                                name: 'github',
                                size: 25
                            }} />
                        <CustomLink
                            url='https://www.linkedin.com/in/siman-tov-jamberu/'
                            className={`${styles.headerBtn} ${styles.header_linkedinBtn}`}
                            child={{
                                name: 'linkedin',
                                size: 25
                            }} />
                    </div>
                </div>
            </div>

            <div className={`${styles.header_bottom} ${styles['Menu_' + isMenuOpen]}`}>
                <nav className={styles.nav_mobile}>
                    <NavLinks />
                </nav>
            </div>
        </header >
    )
}
export default Header