import React, { useContext } from 'react'
import styles from './Footer.module.css'
import CustomBtn from '../../CustomBtn'
import CustomLink from '../../CustomLink'
import dictionary from '../../../dir/dictionary'
// import { useAppDispatch, getAppStateHtml } from '../../../store/hooks'
// import { setHtml, iHtml } from '../../../store/actions'
import { HTMLContext } from '../../../pages/_app'


const Footer = () => {
  // const html = getAppStateHtml();
  // const dispatch = useAppDispatch()
  const { setHtml, html } = useContext(HTMLContext);


  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={styles.footerTopContainer}>
          <div className={styles.footerLinks}>
            <div className={styles.serviceLinks}>
              <h3>
                {dictionary.services[html.lang]}
              </h3>
              <ul>
                <li>
                  <CustomLink
                    href={"/contact"}
                    title={dictionary.contact[html.lang]}
                    children={[
                      <span className={"decoration"} key={0}>
                        &gt;
                      </span>,
                      <span className={"linkItem white"} key={1}>
                        {dictionary.contact[html.lang]}
                      </span>
                    ]}
                  />
                </li>
                <li>
                  <CustomLink
                    href={"/help"}
                    title={dictionary.help[html.lang]}
                    children={[
                      <span className={"decoration"} key={0}>
                        &gt;
                      </span>,
                      <span className={"linkItem white"}  key={1}>
                        {dictionary.help[html.lang]}
                      </span>
                    ]}
                  />
                </li>
                <li>
                  <CustomLink
                    href={"/archive"}
                    title={dictionary.archive[html.lang]}
                    children={[
                      <span className={"decoration"} key={0}>
                        &gt;
                      </span>,
                      <span className={"linkItem white"}  key={1}>
                        {dictionary.archive[html.lang]}
                      </span>
                    ]}
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <div className={styles.footerBottomContainer}>
          <div className={styles.footerLang}>
            <div className={styles.lang}>
              <CustomBtn
                text={'English'}
                className={html.lang == "en-US" ? styles.currentLang : ''}
                handleClick={() => setHtml({ lang: 'en-US', dir: 'ltr' })}
              // handleClick={() => dispatch(setHtml({ lang: "en-US", dir: "ltr" }))}
              />
            </div>
            <div className={styles.lang}>
              <CustomBtn
                text={'עברית'}
                className={html.lang == "he-IL" ? styles.currentLang : ''}
                handleClick={() => setHtml({ lang: 'he-IL', dir: 'rtl' })}
              // handleClick={() => dispatch(setHtml({ lang: "he-IL", dir: "rtl" }))}
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer