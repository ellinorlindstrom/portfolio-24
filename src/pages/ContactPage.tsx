import Footer from '../components/Footer';
import '../scss/ContactPage.scss';

const ContactPage: React.FC = () => {
  return (
    <>
      <div className='contact-page-text'>
        <h2 className='contact-page-title'>
          CONTACT
        </h2>
        <div className='typing-container'>
          <p className='contact-page-subtitle'>
            Reach out :)
          </p>
        </div>
      </div>
      <div className='contact-content'>
        <div className='contact-details-container'>
          <div className='contact-details'>
            <span className='contact-title'>EMAIL:</span>
            <a href="mailto:lindstrom.elle@gmail.com" className='contact-address'>
             lindstrom.elle@gmail.com
            </a>
          </div>
          <div className='contact-details'>
            <span className='contact-title'>LINKEDIN:</span>
            <a href="https://www.linkedin.com/in/ellinor-amanda-lindstrom/" className='contact-address'>
              Ellinor Lindström
            </a>
          </div>
          <div className='contact-details'>
            <span className='contact-title'>GITHUB:</span>
            <a href="https://github.com/ellinorlindstrom" className='contact-address'>
              ellinorlindstrom
            </a>
          </div>
        </div>
        <div className='internship-details'>
          <h3>INTERNSHIP</h3>
          <p>My primary goal is to find an environment where I can <span className='bolder'>enhance my skills</span> as a developer and <span className='bolder'>make meaningful contributions</span>. I am dedicated to <span className='bolder'>learning</span> and <span className='bolder'>growing</span> throughout.</p>
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