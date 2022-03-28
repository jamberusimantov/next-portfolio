import React, { ReactElement } from 'react';
import styles from '../styles/Profile.module.css'
import { Layout, PageHeadWithImage } from '../components';


const Profile = () => {

    return (
        <div className="page">
            <div className="pageContainer">
                <PageHeadWithImage
                    pageName={{ name: 'פרופיל', link: 'profile' }}
                    imageClassName={styles.bgImage}
                    image={true}
                />
                <div className={styles.container}>
                    <div className={styles.about}>
                        <h1>ג'מברו סימן-טוב</h1>
                        <p>
                            בתור מפתח אני תמיד  מוצא את עצמי מרחיב את הידע ואני פשוט אוהב את זה. יש בי סקרנות טבעית ורעב ללמוד ולהתפתח ברמה המקצועית וברמה האישית. לאחרונה סיימתי לימודים תיאורטיים ומעשיים בפיתוח ותכנות הכוללים בין השאר:
                            <strong> HTML</strong>,
                            <strong> CSS</strong>,
                            <strong> JavaScript</strong>,
                            <strong> TypeScript</strong>,
                            <strong> MongoDB</strong>,
                            <strong> ExpressJS</strong>,
                            <strong> ReactJS</strong>,
                            <strong> NodeJS</strong>,
                            <strong> Redux</strong>.
                            יש לי תפיסה קונספטואלית ברמת המאקרו ובמקביל אני יודע לתת תשומת לב לחלקים הקטנים המרכיבים את השלם. לאחר הלימודים עבדתי באינטגרציה באחד מבתי התוכנה הגדולים:
                            <a href='https://www.cognyte.com/'
                                target='_blank'
                                className={styles.link}>
                                Cognyte
                            </a>
                            . דבר אשר הצריך ממני לרכוש ידע וכלים נוספים בצורה עצמאית הכוללים בין השאר:
                            <strong> Ansible</strong>,
                            <strong> Jenkins</strong>,
                            <strong> Docker</strong>,
                            <strong> Linux</strong>,
                            <strong> SQL</strong>.
                            בין תחומי האחריות שלי היו איתור וחקירת באגים, מתן מענה טכני לצוותי פיתוח ובקרת איכות, אינטגרציה של שרתים ושירותים וכן מתן תמיכה ללקוחות החברה. אני קורא הרבה ומרבה להתייעץ עם מומחים כך שאני בטוח שאין אתגר שאין ביכולתי להתגבר עליו. אני מתכנת נלהב במהלך היום ומתרגל יוגה אף יותר נלהב בערב. כבר אמרתי שאני ורסטילי וגמיש?
                            <span>&#128516; </span>
                            מאוד מעוניין להתפתח ולגדול בענף הפיתוח ופתוח ל
                            <strong> BackEnd</strong>/
                            <strong> FrontEnd</strong>/
                            <strong> FullStack</strong>.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
Profile.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;
export default Profile;