import React, { ReactElement } from 'react';
import styles from '../styles/Home.module.css'
import { Layout, Form, Slider } from '../components';
import Image from 'next/image';
import Link from 'next/link';
import { Svg } from '../dir/elements';
import { buffer } from 'stream/consumers';


const ToolboxGridSubItem = (props: { name: string, svg: string }) => {
  return (
    <div className={styles.toolboxGridSubItem}>
      <Svg
        name={props.svg}
        className={styles.toolboxGridSubItemSvg}
        size={30}
      />
      <p className={styles.toolboxGridSubItemP}>{props.name}</p>
    </div>
  )
}
const ContactGridItem = (props: { text: string, svg: string }) => {
  return (
    <div className={styles.contactGridItem}>
      <Svg
        name={props.svg}
        className={styles.contactGridSvg}
        size={40}
      />
      <p className={styles.contactGridP}>{props.text}</p>
    </div>
  )
}

const Home = () => {

  return (
    <div className={styles.homeContainer}>

      <div className={styles.wallpaperSection}>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>Siman tov Jamberu</h1>
          <h2 className={styles.subTitle}>Full Stack Developer</h2>
        </div>
        <div className='formSection'>
          <p>.רוצים לשמוע עוד? מלאו פרטים עכשיו ואחזור אליכם בהקדם</p>
          <Form />
        </div>
      </div>

      <div className={styles.profileSection}>
        <div className={styles.profileContainer}>
          <div className={styles.profileImageContainer}>
            <div className={styles.profileImage}>
              <Image src='/assets/profile/profile0.jpg' layout='fill' />
            </div>
          </div>
          <div className={styles.profileTextContainer}>
            <h2> Full Stack web developer - סימן טוב ג'מברו </h2>
            <p>.בתור מפתח אני תמיד  מוצא את עצמי מרחיב את הידע</p>
            <p>: לפני פחות משנה סיימתי לימודים תיאורטיים ומעשיים בתכנות הכוללים בין השאר</p>
            <p>. HTML, CSS, JS, TS, React, Redux, Express.JS, Node.JS, MongoDB </p>
            <p> :לאחר הלימודים המשכתי בלימוד עצמאי הכולל בין השאר</p>
            <p> .Ansible, Jenkins, Docker, Linux, SQL</p>
            <p>.אני קורא הרבה ומתייעץ הרבה עם מומחים כך שאני בטוח שאין אתגר שאין ביכולתי להתגבר עליו</p>
            <p> .אני מתכנת נלהב במהלך היום ומתרגל יוגה אף יותר נלהב בערב</p>
            <p> .אני מחפש משרה בתור ג'וניור פול-סטאק אבל פתוח גם למשרות של ג'וניור פרונטאנד או ג'וניור בקאנד</p>
            <p className={styles.conclusion}>!סימן טוב ג'מברו - האיש הנכון בשבילך</p>
            <div className={styles.profileLinkContainer}>
              <Link
                href='/profile'
                children={
                  <button
                    className={styles.profileSectionBtn}
                    children={'לפרופיל'}
                  />} />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.contactSection}>
        <div className={styles.contactContainer}>
          <h2> :המטרות שלי</h2>
          <div className={styles.contactGrid}>
            <ContactGridItem
              svg='cv'
              text='לשפר את קורות החיים ולהתכונן לראיונות עבודה בהתאם'
            />
            <ContactGridItem
              svg='user'
              text='להתפתח מקצועית תוך כדי לימוד עם ליווי צמוד של איש מקצוע מנוסה'
            />
            <ContactGridItem
              svg='pc'
              text='לצבור ידע ונסיון מעשי מבוקש בפיתוח'
            />
            <ContactGridItem
              svg='ninja'
              text='להפוך ממפתח מתחיל למתקדם'
            />
          </div>
          <div className={styles.contactLinkContainer}>
            <Link
              href='/contact'
              children={
                <button
                  className={styles.contactSectionBtn}
                  children={'!ליצירת קשר ללא התחייבות לחצו כאן'}
                />} />
          </div>
        </div>
      </div>

      <div className={styles.showcasesSection}>
        <div className={styles.showcasesContainer}>
          <h2> :חלק מהפרוייקטים שביצעתי</h2>
          <Slider />
        </div>
      </div>

      <div className={styles.toolboxSection}>
        <div className={styles.toolboxContainer}>
          <h2>:בארגז הכלים שלי</h2>
          <div className={styles.toolboxGrid}>
            <div className={styles.toolboxGridItem}>
              <ToolboxGridSubItem
                name='HTML'
                svg='html5'
              />
              <ToolboxGridSubItem
                name='CSS'
                svg='css3'
              />
              <ToolboxGridSubItem
                name='JS'
                svg='js'
              />
              <ToolboxGridSubItem
                name='TS'
                svg='ts'
              />
              <ToolboxGridSubItem
                name='NodeJS'
                svg='nodejs'
              />
              <ToolboxGridSubItem
                name='ReactJS'
                svg='react'
              />
              <ToolboxGridSubItem
                name='Redux'
                svg='redux'
              />
            </div>
            <hr className={styles.hr} />
            <div className={styles.toolboxGridItem}>
              <ToolboxGridSubItem
                name='MongoDB'
                svg='mongodb'
              />
              <ToolboxGridSubItem
                name='SQL'
                svg='sql'
              />
            </div>
            <hr className={styles.hr} />
            <div className={styles.toolboxGridItem}>
              <ToolboxGridSubItem
                name='Ansible'
                svg='ansible'
              />
              <ToolboxGridSubItem
                name='Jenkins'
                svg='jenkins'
              />
              <ToolboxGridSubItem
                name='Docker'
                svg='docker'
              />
              <ToolboxGridSubItem
                name='Jira'
                svg='jira'
              />
            </div>
            <hr className={styles.hr} />
            <div className={styles.toolboxGridItem}>
              <ToolboxGridSubItem
                name='Windows'
                svg='windows'
              />
              <ToolboxGridSubItem
                name='Linux'
                svg='linux'
              />
            </div>
          </div>
        </div>
      </div>

    </div>)
}

Home.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;
export default Home;
