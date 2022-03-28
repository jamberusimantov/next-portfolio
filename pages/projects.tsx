import React, { ReactElement } from 'react';
import styles from '../styles/Projects.module.css'
import { Layout, PageHeadWithImage } from '../components';
import Image from 'next/image';


const Brick = (props: { src: string, name: string, href: string }) => {
    return (
        <div className={styles.Brick}>
            <div className={styles.BrickContainer}>
                <a className={styles.link}
                    href={props.href}
                    target='_blank'>
                    <div className={styles.BrickImage}>
                        <Image src={props.src} layout='responsive' width={368} height={245} priority={false} />
                    </div>
                    <div className={styles.BrickText}>
                        <p>{props.name}</p>
                    </div>
                </a>
            </div>
        </div>
    )
}

const Projects = () => {

    return (
        <div className="page">
            <div className="pageContainer">
                <PageHeadWithImage
                    pageName={{ name: 'עבודות', link: 'projects' }}
                    imageClassName={styles.bgImage}
                    image={true}
                />
                <div className={styles.container}>
                    <div className={styles.projects}>
                        <div className={styles.grid}>

                            <Brick
                                src='/assets/projects/next-memo_368x245.jpg'
                                name='Next-Memo'
                                href='https://memo-simantov.herokuapp.com/'
                            />

                            <Brick
                                src='/assets/projects/next-weather_368x245.jpg'
                                name='Next-Weather'
                                href='https://weather-simantov.herokuapp.com/'
                            />

                            <Brick
                                src='/assets/projects/snake_368x245.jpg'
                                name='Snake'
                                href='https://jamberusimantov.github.io/snake/'
                            />

                            <Brick
                                src='/assets/projects/techCareer_368x245.jpg'
                                name='Tech-Career'
                                href='/'
                            />

                            <Brick
                                src='/assets/projects/memories_368x245.jpg'
                                name='Memories'
                                href='https://memories-my-app.herokuapp.com/'
                            />

                            <Brick
                                src='/assets/projects/weather_368x245.jpg'
                                name='Weather'
                                href='https://weather-my-app.herokuapp.com/city294421'
                            />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
Projects.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;
export default Projects;