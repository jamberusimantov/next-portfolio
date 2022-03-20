import React, { ReactElement, useEffect, useState } from 'react';
import styles from '../styles/Profile.module.css'
import { Layout, Form } from '../components';
import Image from 'next/image';


const Profile = () => {
    const [src, setSrc] = useState(1)

    useEffect(() => {
        const interval = setInterval(() => {
            setSrc(src === 3 ? 1 : src + 1)
        }, 6000)
        return (() => clearInterval(interval))
    })

    return (
        <div className='pageContainer'>
            <div className='pageTitle'>
                <h2> Full Stack web developer - סימן טוב ג'מברו </h2>
            </div>
            <div className='pageBody'>
                <div className={styles.profilePTop}>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                </div>
                <div className={styles.profileGrid}>
                    <div className={styles.profileGridImageContainer}>
                        <div className={styles.profileGridImage}>
                            <Image src={`/assets/profile/profile${src}.jpg`} layout='fill' />
                        </div>
                    </div>
                    <div className={styles.profileGridTextContainer}>
                        <p>.בתור מפתח אני תמיד  מוצא את עצמי מרחיב את הידע</p>
                        <p>: לפני פחות משנה סיימתי לימודים תיאורטיים ומעשיים בתכנות הכוללים בין השאר</p>
                        <p>. HTML, CSS, JS, TS, React, Redux, Express.JS, Node.JS, MongoDB </p>
                        <p> :לאחר הלימודים המשכתי בלימוד עצמאי הכולל בין השאר</p>
                        <p> .Ansible, Jenkins, Docker, Linux, SQL</p>
                        <p>.אני קורא הרבה ומתייעץ הרבה עם מומחים כך שאני בטוח שאין אתגר שאין ביכולתי להתגבר עליו</p>
                        <p> .אני מתכנת נלהב במהלך היום ומתרגל יוגה אף יותר נלהב בערב</p>
                        <p> .אני מחפש משרה בתור ג'וניור פול-סטאק אבל פתוח גם למשרות של ג'וניור פרונטאנד או ג'וניור בקאנד</p>
                    </div>
                </div>
                <p className={styles.conclusion}>!סימן טוב ג'מברו - האיש הנכון בשבילך</p>


                <div className='formSection'>
                    <p>.רוצים לשמוע עוד? מלאו פרטים עכשיו ואחזור אליכם בהקדם</p>
                    <Form />
                </div>

            </div>
        </div>
    )
}
Profile.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;
export default Profile;