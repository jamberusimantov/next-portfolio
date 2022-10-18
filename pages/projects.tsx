import React from 'react';
import styles from '../styles/Projects.module.css';
import CustomLink from '../components/CustomLink';
import Page from '../components/Page';
import { iPage } from 'components/Page';
import Image from 'next/image';


const Projects: iPage = () => <Page
    pageName="projects"
    imageClassName={styles.bgImage}
    children={<PageContent />}
/>

const PageContent = () =>
    <div className={styles.container} >
        <div className={styles.projects}>
            <div className={styles.grid}>
                <div className={styles.Brick}>
                    <div className={styles.BrickContainer}>
                        <CustomLink
                            href={'https://memo-simantov.herokuapp.com/'}
                            title={'Next-Memo'}
                            children={<>
                                <div className={styles.BrickImage}>
                                    <Image
                                        src={'/assets/projects/next-memo_368x245.jpg'}
                                        layout='responsive'
                                        width={368}
                                        height={245}
                                        priority={false}
                                    />
                                </div>
                                <div className={styles.BrickText}>
                                    <p>{'Next-Memo'}</p>
                                </div>
                            </>}
                        />
                    </div>
                </div>
                <div className={styles.Brick}>
                    <div className={styles.BrickContainer}>
                        <CustomLink
                            href={'https://weather-simantov.herokuapp.com/'}
                            title={'Next-Weather'}
                            children={<>
                                <div className={styles.BrickImage}>
                                    <Image
                                        src={'/assets/projects/next-weather_368x245.jpg'}
                                        layout='responsive'
                                        width={368}
                                        height={245}
                                        priority={false}
                                    />
                                </div>
                                <div className={styles.BrickText}>
                                    <p>{'Next-Weather'}</p>
                                </div>
                            </>}
                        />
                    </div>
                </div>
                <div className={styles.Brick}>
                    <div className={styles.BrickContainer}>
                        <CustomLink
                            title={'Snake'}
                            href={'https://jamberusimantov.github.io/snake/'}
                            children={<>
                                <div className={styles.BrickImage}>
                                    <Image
                                        src={'/assets/projects/snake_368x245.jpg'}
                                        layout='responsive'
                                        width={368}
                                        height={245}
                                        priority={false}
                                    />
                                </div>
                                <div className={styles.BrickText}>
                                    <p>{'Snake'}</p>
                                </div>
                            </>}
                        />
                    </div>
                </div>
                <div className={styles.Brick}>
                    <div className={styles.BrickContainer}>
                        <CustomLink
                            title={'Tech-Career'}
                            href={'/'}
                            children={<>
                                <div className={styles.BrickImage}>
                                    <Image
                                        src={'/assets/projects/techCareer_368x245.jpg'}
                                        layout='responsive'
                                        width={368}
                                        height={245}
                                        priority={false}
                                    />
                                </div>
                                <div className={styles.BrickText}>
                                    <p>{'Tech-Career'}</p>
                                </div>
                            </>}
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>

Projects.getLayout = Page.getLayout;

export default Projects;