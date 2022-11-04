import React from 'react';
import styles from './hamburger.module.css';


interface iHamburgerProps {
    isMenuOpen: boolean,
    setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
};

const Hamburger = (props: iHamburgerProps) => {
    const { isMenuOpen, setIsMenuOpen } = props;
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
        document.querySelector(`button.${styles.hamburger}`)?.classList.toggle(styles.active);
    };
    return (
        <div className={styles.menuBtn}>
            <button className={styles.hamburger} onClick={toggleMenu}>
                <div className={styles.inner}>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                </div>
            </button>
        </div>
    );
};

export default Hamburger;