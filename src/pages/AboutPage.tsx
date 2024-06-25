import { Link } from 'react-router-dom';
import styles from '../scss/AboutPage.module.scss';

function AboutPage() {
  return (
    <div className={styles['about-page-text']}>
    <h2 className={styles['about-page-title']}>
        ABOUT</h2>
        <p className={styles['about-page-subtitle']}>
        I’m a <i>curious</i> and <b>enthusiastic</b> developer with a passion for  immersive, and captivating experiences.💫 <br />
        I am currently seeking an internship to further develop my skills in this field, and/or general skills as a developer. See my internship periods, or contact me <Link className={styles.animatedUnderline} to='/contact'>here:)</Link> 
  </p>
        </div>
  )
}

export default AboutPage