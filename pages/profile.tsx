import React, { ReactElement } from 'react';
import styles from '../styles/Profile.module.css'
import { Layout } from '../components';
import Image from 'next/image';


const Profile = () => {

    return (
        <div className={styles.profileContainer}>
            <h2> Full Stack web developer - סימן טוב ג'מברו </h2>
            <p className={styles.profilePTop}>
                As a developer, I am constantly driven to expand my knowledge. Recently I completed theoretical and practical studies in programming including HTML, CSS, JS, TS, React, Redux, Express.JS, Node.JS, MongoDB. I read a lot and consult professionals so I am sure there’s no challenge I can’t overcome. I am an enthusiastic coder during the day and an even more enthusiastic gardener at night :). I’m currently looking for a Full Stack position, but I’m open to other positions in this area for acquiring experience and broadening my knowledge.
            </p> 
            <div className={styles.profileGrid}>
                <div className={styles.profileGridImageContainer}>
                    <div className={styles.profileGridImage}>
                        <Image src='/assets/profile/profile1.jpg' layout='fill' />
                    </div>
                </div>
                <div className={styles.profileGridTextContainer}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus autem nulla eum.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus autem nulla eum.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus autem nulla eum.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus autem nulla eum.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus autem nulla eum.</p>
                </div>
            </div>
            {/* <div className={styles.profileGrid}>
                <div className={styles.profileGridImageContainer}>
                    <div className={styles.profileGridImage}>
                        <Image src='/assets/profile/profile2.jpg' layout='fill' />
                    </div>
                </div>
                <div className={styles.profileGridTextContainer}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus autem nulla eum.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus autem nulla eum.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus autem nulla eum.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus autem nulla eum.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus autem nulla eum.</p>
                </div>
            </div>
            <div className={styles.profileGrid}>
                <div className={styles.profileGridImageContainer}>
                    <div className={styles.profileGridImage}>
                        <Image src='/assets/profile/profile3.jpg' layout='fill' />
                    </div>
                </div>
                <div className={styles.profileGridTextContainer}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus autem nulla eum.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus autem nulla eum.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus autem nulla eum.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus autem nulla eum.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus autem nulla eum.</p>
                </div>
            </div> */}
            <p className={styles.conclusion}>!סימן טוב ג'מברו - האיש הנכון בשבילך</p>
        </div>
    )
}
Profile.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;
export default Profile;