import { Link } from 'react-router-dom';
import styles from '../scss/HomePage.module.scss';


function HomePage() {
  return (
    <>
    <div className={styles['home-page-text']}>
    <h1 className={styles['home-page-title']}>
    FRONT-END<br />DEVELOPER
  </h1>
  <p className={styles['home-page-subtitle']}>
  Driven, and curious Front End Developer Student, with a fondness for motion- and interactive designs
  </p>
  <Link className={styles['rotating-container']} to='/contact'>
        <svg className={styles['rotating-text']} viewBox="0 0 100 100">
          <path id="circlePath" d="
            M 50, 50
            m -37, 0
            a 37,37 0 1,1 74,0
            a 37,37 0 1,1 -74,0" fill="none" />
          <text fill="#D6594C">
            <textPath href="#circlePath">
              OPEN  FOR  INTERNSHIP 
            </textPath>
          </text>
        </svg>
      </Link>
  </div>
  </>
  )
}

export default HomePage