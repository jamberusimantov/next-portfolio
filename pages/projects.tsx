import React, { ReactElement } from 'react';
import styles from '../styles/Projects.module.css';
import Page from '../components/Page';
import Layout from '../components/Layout';
import CustomLink from '../components/CustomLink';
import Image from 'next/image';


const Projects = () =>
    <Page pageName="projects" imageClassName={styles.bgImage}>
        <div className={styles.container} >
            <div className={styles.projects}>
                <div className={styles.grid}>
                    <div className={styles.Brick}>
                        <div className={styles.BrickContainer}>
                            <CustomLink href={'https://memo-simantov.herokuapp.com/'} title={'Next-Memo'}>
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
                            </CustomLink>
                        </div>
                    </div>
                    <div className={styles.Brick}>
                        <div className={styles.BrickContainer}>
                            <CustomLink href={'https://weather-simantov.herokuapp.com/'} title={'Next-Weather'}>
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
                            </CustomLink>
                        </div>
                    </div>
                    <div className={styles.Brick}>
                        <div className={styles.BrickContainer}>
                            <CustomLink title={'Snake'} href={'https://jamberusimantov.github.io/snake/'}>
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
                            </CustomLink>
                        </div>
                    </div>
                    <div className={styles.Brick}>
                        <div className={styles.BrickContainer}>
                            <CustomLink title={'Tech-Career'} href={'/'}>
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
                            </CustomLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Page>

Projects.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;

export default Projects;