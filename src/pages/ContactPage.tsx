//import { useEffect } from 'react';
import { ChangeEvent, FormEvent, useState } from 'react';
import styles from '../scss/ContactPage.module.scss';
import axios from 'axios';

  interface FormData {
    name: string;
    email: string;
    message: string;
  }
  
  const ContactPage: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
      name: '',
      email: '',
      message: ''
    });
  
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
      const { name, value } = e.target;
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    };
  
    const handleSubmit = async (e: FormEvent): Promise<void> => {
      e.preventDefault();
      try {
        const response = await axios.post('http://localhost:3000/send', formData);
        if (response.status === 200) {
          alert('Message sent successfully');
        }
      } catch (error) {
        alert('Failed to send message');
      }
    };
  

  return (
    <>
    <div className={styles['contact-page-text']}>
    <h2 className={styles['contact-page-title']}>
        CONTACT</h2>
        <div className={styles['typing-container']}>
        <p className={styles['contact-page-subtitle']}>
        Reach out :)
  </p>
  </div>
  </div>
  <div className={styles.contactContent}>
        <form className={styles.contactForm} onSubmit={handleSubmit}>
        <label htmlFor="name">Name*</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          
          <label htmlFor="email">Email address*</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          
          <label htmlFor="message">Message*</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          
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