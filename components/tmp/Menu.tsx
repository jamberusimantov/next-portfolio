import React from 'react';
import styles from '../styles/Home.module.css'
import { fetcher } from '../../dir/functions';

const Menu = (props: { setSection: (section: string) => void }) => {

  const getResume = async () => {
    try {
      const response = await fetcher(`api/websites?name=Snake`)
      if (response.error) throw response.error;
      const data: string = response.data[0].image;
      const type = data.substring(data.indexOf('/') + 1, data.indexOf(';'))
      const el = document.createElement('a');
      el.href = data;
      el.download = `Jamberu_Simantov_FullStack_web_developer.${type}`;
      el.click();
    } catch (error) {
      console.log(error);
    }
  }



  return (
    <div className={styles.grid}>

      <div
        className={`${styles.card_menu} ${styles.card}`}
        onClick={() => props.setSection('about')}
      >
        <h2>About &rarr;</h2>
        <p>Learn about me and my passions.</p>
      </div>

      <div
        className={`${styles.card_menu} ${styles.card}`}
        onClick={() => props.setSection('projects')}
      >
        <h2>Projects &rarr;</h2>
        <p>Discover some of my projects.</p>
      </div>

      <div
        className={`${styles.card_menu} ${styles.card}`}
        onClick={getResume}
      >
        <h2>Cv &rarr;</h2>
        <p>Get my awesome resume now.</p>
      </div>

      <div
        className={`${styles.card_menu} ${styles.card}`}
        onClick={() => props.setSection('contact')}
      >
        <h2>Contact &rarr;</h2>
        <p>Contact me for more information.</p>
      </div>
    </div>
  )
}
export default Menu;
