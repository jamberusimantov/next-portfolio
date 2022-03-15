import { useEffect } from 'react';
import styles from './Slider.module.css';
import { CustomBtn } from '../../dir/elements';

const Slider = () => {

  const slider = document.getElementById('slider')
  let sliderInterval: NodeJS.Timer;
  let margin = 0;

  const moveSlider = () => {
    const sliderMoveInterval = setInterval(() => {
      margin -= 25;
      if (margin <= -1500) { margin = 0; }
      if (slider) { slider.style.marginLeft = `${margin}px`; }
      if (margin % 250 === 0) { clearInterval(sliderMoveInterval) }
    }, 10);
  }
  const interval = (isStart?: boolean) => {
    if (isStart) {
      sliderInterval = setInterval(() => moveSlider(), 6000)
      return
    }
    clearInterval(sliderInterval)
  }
  const setMargin = (isNext?: boolean) => {
    if (isNext) {
      margin -= 250;
      if (margin <= -1500) { margin = 0; }
      if (slider) { slider.style.marginLeft = `${margin}px`; }
      return
    }
    margin += 250;
    if (margin >= 0) { margin = -1500; }
    if (slider) { slider.style.marginLeft = `${margin}px`; }
  }

  useEffect(() => {
    interval(true)
    return (interval)
  }, [])

  return (
    <div 
    className={styles.sliderContainer}
    onMouseEnter={() => interval()}
    onMouseLeave={() => interval(true)}
    >
      <CustomBtn
        className={styles.slideNextBtn}
        child={{
          name: 'up-arrow',
          className: styles.NextBtn,
          size: 20,
        }}
        click={() => setMargin(true)}
      />
      <CustomBtn
        className={styles.slidePreviousBtn}
        child={{
          name: 'up-arrow',
          className: styles.PreviousBtn,
          size: 20,
        }}
        click={() => setMargin()}
      />
      <div className={styles.slider} id='slider'>
        <div className={`${styles.card} ${styles.card1}`}></div>
        <div className={`${styles.card} ${styles.card2}`}></div>
        <div className={`${styles.card} ${styles.card3}`}></div>
        <div className={`${styles.card} ${styles.card4}`}></div>
        <div className={`${styles.card} ${styles.card5}`}></div>
        <div className={`${styles.card} ${styles.card6}`}></div>
        <div className={`${styles.card} ${styles.card1}`}></div>
        <div className={`${styles.card} ${styles.card2}`}></div>
        <div className={`${styles.card} ${styles.card3}`}></div>
        <div className={`${styles.card} ${styles.card4}`}></div>
        <div className={`${styles.card} ${styles.card5}`}></div>
        <div className={`${styles.card} ${styles.card6}`}></div>
      </div>
    </div>
  )
}
export default Slider