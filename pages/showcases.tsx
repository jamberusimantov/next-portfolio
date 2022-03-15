import React, { ReactElement } from 'react';
import styles from '../styles/Showcases.module.css'
import { Layout } from '../components';
import { website } from '../dir/types';
import Image from "next/image"


const Showcases = (props: { projects: website[] }) => {

    return (
        <div className={styles.showcasesContainer}>
            <div className={styles.showcases}>
                <div className={styles.grid}>
                    {props.projects && React.Children.toArray(props.projects?.map((project, i) =>

                        <a href={project.url} target="_blank" key={i.toString()}>
                            <div className={`${styles.card} ${styles.card_projects}`} >
                                <div className={styles.cardImageContainer}>
                                    <Image
                                        className={styles.img}
                                        src={`${project.image}`}
                                        alt={project.name}
                                        layout='fill'
                                    />
                                </div>
                                <div className={styles.cardTextContainer}>
                                    <h2>{project.name} &rarr;</h2>
                                    <p>{project.description}</p>
                                </div>
                            </div>
                        </a>

                    ))}
                </div>
            </div>
        </div>
    )
}
Showcases.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;
export default Showcases;