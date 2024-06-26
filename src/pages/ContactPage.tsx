import Footer from '../components/Footer';
import styles from '../scss/ContactPage.module.scss';

const ContactPage: React.FC = () => {
  return (
    <>
      <div className={styles['contact-page-text']}>
        <h2 className={styles['contact-page-title']}>
          CONTACT
        </h2>
        <div className={styles['typing-container']}>
          <p className={styles['contact-page-subtitle']}>
            Reach out :)
          </p>
        </div>
      </div>
      <div className={styles.contactContent}>
        <div className={styles.contactDetailsContainer}>
          <div className={styles['contact-details']}>
            <span className={styles['contact-title']}>EMAIL:</span>
            <a href="mailto:lindstrom.elle@gmail.com" className={styles['contact-address']}>
            &#x2197; lindstrom.elle@gmail.com
            </a>
          </div>
          <div className={styles['contact-details']}>
            <span className={styles['contact-title']}>LINKEDIN:</span>
            <a href="https://www.linkedin.com/in/ellinor-lindstrom" className={styles['contact-address']}>
            &#x2197; Ellinor Lindström
            </a>
          </div>
          <div className={styles['contact-details']}>
            <span className={styles['contact-title']}>GITHUB:</span>
            <a href="https://github.com/ellinorlindstrom" className={styles['contact-address']}>
            &#x2197; ellinorlindstrom
            </a>
          </div>
        </div>
        <div className={styles.internshipDetails}>
          <h3>INTERNSHIP</h3>
          <p>My primary goal is to find an environment where I can <span className={styles['bolder']}>enhance my skills</span> as a developer and <span className={styles['underline']}>make meaningful contributions</span>. I am dedicated to <i>learning</i> and <i>growing</i> throughout this experience.</p>
          <p><strong>Dates:</strong></p>
          <p>2024-09-09 - 2024-11-15 Weeks: 10</p>
          <p>2024-12-30 - 2025-04-17 Weeks: 16</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;