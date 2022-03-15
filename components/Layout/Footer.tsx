import React, { useEffect, useState } from 'react'
import { CustomBtn, Svg } from '../../dir/elements'
import styles from './Layout.module.css'
import { CustomLink } from '../../dir/elements'


const Footer = () => {
  const [isScroll, setIsScroll] = useState(false)

  useEffect(() => {
    const scrollHandler = () => { setIsScroll(scrollY > 50) }
    addEventListener('scroll', scrollHandler);
    return (() => { removeEventListener('scroll', scrollHandler) })
  })

  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        {isScroll && <CustomBtn
          className={styles.goTOtopBtn}
          child={{
            name: 'up-arrow',
            size: 15,
          }}
          click={() => { scroll({ top: 0, behavior: 'smooth' }) }}
        />
        }
        <div className={styles.copyright}>
          Made with ❤ in Israel © 2022 Siman tov Jamberu. All rights reserved.
        </div>
      </div>
      <div className={styles.footerBottom}>
        <div>
          <CustomLink
            url="tel:+972528405624"
            className={`${styles.footerBtn} ${styles.footer_phoneBtn}`}
            child={{
              className: 'svg_square',
              text: '052-840-5624',
              size: 25
            }} />
          :טלפון
        </div>
        <div>
          <CustomLink
            url='https://api.whatsapp.com/send?phone=+972528405624&text=שלום%20סימן%20טוב%20אשמח%20לדעת%20יותר'
            className={`${styles.footerBtn} ${styles.footer_whatsappBtn}`}
            child={{
              name: 'whatsapp',
              size: 25
            }} />
          <CustomLink
            url='https://github.com/jamberusimantov'
            className={`${styles.footerBtn} ${styles.footer_githubBtn}`}
            child={{
              name: 'github',
              size: 25
            }} />
          <CustomLink
            url='https://www.linkedin.com/in/siman-tov-jamberu/'
            className={`${styles.footerBtn} ${styles.footer_linkedinBtn}`}
            child={{
              name: 'linkedin',
              size: 25
            }} />
        </div>
      </div>
    </footer>
  )
}
export default Footer