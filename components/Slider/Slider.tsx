import { useEffect } from 'react';
import styles from './Slider.module.css';
import { CustomBtn } from '../../dir/elements';


const Slider = () => {

  let sliderInterval: NodeJS.Timer;
  let margin = 0;
  const moveSlider = (isNext?: boolean) => {
    const slider = document.getElementById('slider')
    const sliderMoveInterval = setInterval(() => {
      margin = isNext
        ? margin - 25
        : margin + 25;
      margin = margin <= -1500
        ? 0
        : margin > 0
          ? -1500
          : margin;
      if (slider) { slider.style.marginLeft = `${margin}px`; }
      margin % 250 === 0 && clearInterval(sliderMoveInterval);
    }, 10);
  }
  const interval = (isStart?: boolean) => {
    if (isStart) {
      sliderInterval = setInterval(() => moveSlider(true), 6000)
      return
    }
    clearInterval(sliderInterval)
  }

  useEffect(() => {
    interval(true);
    return (interval);
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
        click={() => moveSlider(true)}
      />
      <CustomBtn
        className={styles.slidePreviousBtn}
        child={{
          name: 'up-arrow',
          className: styles.PreviousBtn,
          size: 20,
        }}
        click={() => moveSlider()}
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