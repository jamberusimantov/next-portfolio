import React, { ReactElement, useEffect, useState } from 'react';
import styles from './PageHeadWithImage.module.css'
import Image from 'next/image';
import Link from 'next/link';

const PageHeadWithImage = (props: {
    pageName?: { name: string, link: string },
    subPageName?: { name: string, link: string },
    imageClassName?: string,
    image?: boolean,
    customLinks?: { name: string, link: string }[]
}) => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const hamburger = document.querySelector('button.hamburger');
        if (hamburger) {
            const clickHamburger = () => hamburger.classList.toggle('active');
            hamburger.addEventListener('click', clickHamburger);
            return (() => hamburger.removeEventListener('click', clickHamburger))
        }
    }, [])

    return (
        <>
            {/* navSection */}
            <div className={styles.navSection}>
                <div className={styles.navSectionContainer}>
                    <div className={styles.breadcrumbsMenuContainer}>
                        <div className={styles.breadcrumbs}>
                            {!props.pageName
                                ? <p>דף הבית</p>
                                : <>
                                    <Link
                                        href='/'
                                        children={<p className={styles.navItem}>
                                            דף הבית
                                        </p>
                                        }
                                    />
                                    {!props.subPageName
                                        ? <>
                                            <span className={styles.breadcrumbsSeparator}> &lt;</span>
                                            <p>{props.pageName.name}</p>
                                        </>
                                        : <>
                                            <span className={styles.breadcrumbsSeparator}> &lt;</span>
                                            <Link
                                                href={`/${props.pageName.link}`}
                                                children={<p className={styles.navItem}>{props.pageName.name}</p>
                                                }
                                            />
                                            <span className={styles.breadcrumbsSeparator}> &lt;</span>
                                            <p>{props.subPageName.name}</p>
                                        </>
                                    }
                                </>
                            }
                        </div>
                        {/* mobile menuBtn for homepage */}
                        {!props.pageName &&
                            <div className={styles.menuBtn}
                                onClick={() => { setIsMenuOpen(!isMenuOpen) }}
                            >
                                <button className='hamburger' type="button">
                                    <div className='inner'>
                                        <span className='bar'></span>
                                        <span className='bar'></span>
                                        <span className='bar'></span>
                                    </div>
                                </button>
                            </div>
                        }
                    </div>
                    {/* desktop search OR menu */}
                    {!props.pageName
                        ? <ul className={`${styles.nav} ${isMenuOpen ? styles.active : ''}`}>
                            <hr className={styles.hr} />
                            <li>
                                <Link
                                    href='/profile'
                                    children={<p className={styles.navItem}>
                                        פרופיל
                                    </p>}
                                />
                            </li>
                            <hr className={styles.hr} />
                            <li>
                                <Link
                                    href='/projects'
                                    children={<p className={styles.navItem}>
                                        עבודות
                                    </p>}
                                />
                            </li>
                            <hr className={styles.hr} />
                            <li>
                                <Link
                                    href='/contact'
                                    children={<p className={styles.navItem}>
                                        צור קשר
                                    </p>}
                                />
                            </li>
                            <hr className={styles.hr} />
                        </ul>
                        : <div className={styles.navSectionSearch}>
                            <input className={styles.searchInput}
                                type="text"
                                placeholder='Search'
                            />
                            <button className={styles.searchBtn}
                            >
                                <div className={styles.magnifierContainer}>
                                    <Image src='/assets/svg/magnifier.svg' layout='fill' />
                                </div>
                            </button>
                        </div>
                    }
                    {/* mobile search */}
                    <div className={styles.navSectionMobileSearch}>
                        <input className={styles.searchInput}
                            type="text"
                            placeholder='Search'
                        />
                        <button className={styles.searchBtn}
                        >
                            <div className={styles.magnifierContainer}>
                                <Image src='/assets/svg/magnifier.svg' layout='fill' />
                            </div>
                        </button>
                    </div>
                </div>
            </div>
            {/* imageSection */}
            {props.image &&
                <div className={`${styles.imageSection} ${props.imageClassName}`}>
                    <div className={styles.imageSectionContainer}>
                        {/* homepage search and links grid */}
                        {!props.pageName &&
                            <>
                                {props.customLinks &&
                                    <div className={styles.imageSectionLinks}>
                                        {props.customLinks.map(obj => <Link
                                            key={obj.name}
                                            href={`/${obj.link}`}
                                            children={<p className={styles.imageSectionLinkItem}>
                                                <span className={styles.imageSectionLinkBullet}>&lt;</span>
                                                <span className={styles.imageSectionLinkText}>
                                                    {obj.name}
                                                </span>
                                            </p>}
                                        />)}
                                    </div>
                                }
                                <div className={styles.imageSectionSearch}>
                                    <input className={styles.searchInput}
                                        type="text"
                                        placeholder='Search'
                                    />
                                    <button className={styles.searchBtn}>
                                        <div className={styles.magnifierContainer}>
                                            <Image src='/assets/svg/magnifier.svg' layout='fill' />
                                        </div>
                                    </button>
                                </div>
                            </>
                        }
                    </div>
                </div>
            }
        </>
    )
}
export default PageHeadWithImage;