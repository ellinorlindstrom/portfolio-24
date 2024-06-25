import styles from '../scss/ContactPage.module.scss';

function ContactPage() {
  return (
    <>
    <div className={styles['contact-page-text']}>
    <h2 className={styles['contact-page-title']}>
        CONTACT</h2>
        <p className={styles['contact-page-subtitle']}>
        Reach out :)
  </p>
  </div>
  <div className={styles.contactContent}>
        <form className={styles.contactForm}>
          <label htmlFor="name">Name*</label>
          <input type="text" id="name" name="name" /* placeholder="Olivia" */ />
          
          <label htmlFor="email">Email address*</label>
          <input type="email" id="email" name="email" /* placeholder="hello@reallygreatsite.com" */ />
          
          <label htmlFor="message">Message*</label>
          <textarea id="message" name="message" /* placeholder="Type your message here" */></textarea>
          
          <div className={styles.buttonContainer}>
            <button type="submit">SUBMIT</button>
          </div>
        </form>
        <div className={styles.internshipDetails}>
          <h2>INTERNSHIP</h2>
          <p>My primary goal is to find an environment where I can enhance my skills as a developer and make meaningful contributions. I am dedicated to learning and growing throughout this experience.</p>
          <p><strong>Dates:</strong></p>
          <p>2024-09-09 - 2024-11-15 Weeks: 10</p>
          <p>2024-12-30 - 2025-04-17 Weeks: 16</p>
        </div>
      </div>
      </> 
  )
}

export default ContactPage