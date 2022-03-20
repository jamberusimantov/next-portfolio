import React, { useEffect, useState } from 'react'
import { CustomLink } from '../../dir/elements'
import Link from 'next/link'
import styles from './Layout.module.css'
import Router from 'next/router'


const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [currentRoute, setCurrentRoute] = useState('/');

    useEffect(() => {
        Router.events.on('routeChangeComplete', () => {
                setCurrentRoute(Router.pathname);
                handleMenuOpen();
        })
        return (() => {
            Router.events.on('routeChangeComplete', () => { })
        })
    }, [])

    const handleMenuOpen = () => {
        const burger1 = document.getElementById('burger1')
        const burger2 = document.getElementById('burger2')
        const burger3 = document.getElementById('burger3')
        if (burger1 && burger2 && burger3) {
            if (!isMenuOpen) {
                burger1.style.transform = 'rotate(-45deg) translate(0,5px)'
                burger2.style.display = 'none'
                burger3.style.transform = 'rotate(45deg) translate(0,-5px)'
                setIsMenuOpen(true);
                return;
            }
            burger1.style.transform = ''
            burger2.style.display = 'block'
            burger3.style.transform = ''
            setIsMenuOpen(false);
        }
    }

    const NavLinks = () => {
        return (
            <>
                <Link
                    href='/contact'
                    children={
                        <span className={currentRoute === '/contact'
                            ? styles.current
                            : styles.navItem
                        }>צור קשר</span>
                    }
                />
                <Link
                    href='/showcases'
                    children={
                        <span className={currentRoute === '/showcases'
                            ? styles.current
                            : styles.navItem
                        }>עבודות</span>
                    }
                />
                <Link
                    href='/profile'
                    children={
                        <span className={currentRoute === '/profile'
                            ? styles.current
                            : styles.navItem
                        }>פרופיל</span>
                    }
                />
                <Link
                    href='/'
                    children={
                        <span className={currentRoute === '/'
                            ? styles.current
                            : styles.navItem
                        }>דף הבית</span>
                    }
                />
            </>
        )
    }

    return (
        <header className={styles.header}>
            <div className={styles.header_top}>

                <div className={styles.hamburger_logo_container}>
                    <div className={styles.menuBtn}>
                        <div
                            className={styles.hamburger}
                            onClick={handleMenuOpen}
                        >
                            <div className={styles.burger} id='burger1'></div>
                            <div className={styles.burger} id='burger2'></div>
                            <div className={styles.burger} id='burger3'></div>
                        </div>
                    </div>
                    <div className={styles.logoContainer}>
                        <div className={styles.logo}>
                            WEB
                            <CustomLink
                                url="/"
                                className={styles.homeBtn}
                                child={{
                                    name: 'web',
                                    className: 'styles.svg_round',
                                    size: 50,
                                    samePage: true,
                                }} />
                            DEV
                        </div>
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

            {isMenuOpen && <div className={styles.header_bottom}>
                <nav className={styles.nav_mobile}>
                    <NavLinks />
                </nav>
            </div>}

        </header >
    )
}
export default Header