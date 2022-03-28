import React from 'react'
import styles from './Footer.module.css'
import Link from 'next/link'

const Footer = () => {

  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={styles.footerTopContainer}>
          <div className={styles.footerLinks}>

            {/* service links */}
            <div className={styles.serviceLinks}>
              <h3>שירותים</h3>
              <Link
                href='/contact'
                children={<p className={styles.linkItem}>
                  <span className={styles.linkBullet}>&lt;</span>
                  <span className={styles.linkText}>
                    צור קשר
                  </span>
                </p>}
              />
              <Link
                href='/siteMap'
                children={<p className={styles.linkItem}>
                  <span className={styles.linkBullet}>&lt;</span>
                  <span className={styles.linkText}>
                    מפת האתר
                  </span>
                </p>}
              />
              <Link
                href='/help'
                children={<p className={styles.linkItem}>
                  <span className={styles.linkBullet}>&lt;</span>
                  <span className={styles.linkText}>
                    עזרה
                  </span>
                </p>}
              />
              <Link
                href='/archive'
                children={<p className={styles.linkItem}>
                  <span className={styles.linkBullet}>&lt;</span>
                  <span className={styles.linkText}>
                    ארכיון
                  </span>
                </p>}
              />
            </div>

            {/* about the site links */}
            <div className={styles.aboutThisSiteLinks}>
              <h3>על האתר</h3>
              <Link
                href='/copyrights'
                children={<p className={styles.linkItem}>
                  <span className={styles.linkBullet}>&lt;</span>
                  <span className={styles.linkText}>
                    זכוית יוצרים
                  </span>
                </p>}
              />
              <Link
                href='/privacy'
                children={<p className={styles.linkItem}>
                  <span className={styles.linkBullet}>&lt;</span>
                  <span className={styles.linkText}>
                    פרטיות
                  </span>
                </p>}
              />
              <Link
                href='/cookies'
                children={<p className={styles.linkItem}>
                  <span className={styles.linkBullet}>&lt;</span>
                  <span className={styles.linkText}>
                    עוגיות
                  </span>
                </p>}
              />
              <Link
                href='/accessibility'
                children={<p className={styles.linkItem}>
                  <span className={styles.linkBullet}>&lt;</span>
                  <span className={styles.linkText}>
                    נגישות
                  </span>
                </p>}
              />
              <Link
                href='/vulnerability'
                children={<p className={styles.linkItem}>
                  <span className={styles.linkBullet}>&lt;</span>
                  <span className={styles.linkText}>
                    דוח פגיעות
                  </span>
                </p>}
              />
            </div>

          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <div className={styles.footerBottomContainer}>
          <div className={styles.footerLang}>
            <button className={styles.lang}>
              English
            </button>
            <button className={styles.lang}>
             עברית
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer