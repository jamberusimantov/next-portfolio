import React, { useContext } from 'react';
import styles from './index.module.css';
import CustomBtn from '../../CustomBtn';
import CustomLink from '../../CustomLink';
import dictionary from '../../../dir/dictionary';
import HTMLContext from '../../../contexts/htmlContext';


const Decoration = () => <span className={"decoration"}>&gt;</span>;

const Footer = () => {
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
                  <Decoration />
                  <CustomLink
                    href={"/contact"}
                    title={dictionary.contact["en-US"]}
                    children={dictionary.contact[html.lang]}
                    className="white"
                  />
                </li>
                <li>
                  <Decoration />
                  <CustomLink
                    href={"/help"}
                    title={dictionary.help["en-US"]}
                    children={dictionary.help[html.lang]}
                    className="white"
                  />
                </li>
                <li>
                  <Decoration />
                  <CustomLink
                    href={"/archive"}
                    title={dictionary.archive["en-US"]}
                    children={dictionary.archive[html.lang]}
                    className="white"
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
              />
            </div>
            <div className={styles.lang}>
              <CustomBtn
                text={'עברית'}
                className={html.lang == "he-IL" ? styles.currentLang : ''}
                handleClick={() => setHtml({ lang: 'he-IL', dir: 'rtl' })}
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;