import Footer from '../components/Footer';
import '../scss/ContactPage.scss';

const ContactPage: React.FC = () => {
  return (
    <>
    <div className='contact-page-container'>
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
        <div className='contact-details-container'>
          <div className='contact-details'>
            <span className='contact-title'>EMAIL</span>
            <a href="mailto:lindstrom.elle@gmail.com" className='contact-address'>
             lindstrom.elle@gmail.com
            </a>
          </div>
          <div className='contact-details'>
            <span className='contact-title'>LINKEDIN</span>
            <a href="https://www.linkedin.com/in/ellinor-amanda-lindstrom/" className='contact-address'>
              Ellinor Lindström
            </a>
          </div>
          <div className='contact-details'>
            <span className='contact-title'>GITHUB</span>
            <a href="https://github.com/ellinorlindstrom" className='contact-address'>
              ellinorlindstrom
            </a>
          </div>
        </div>
    </div>
    <Footer />
    </>
  );
};

export default ContactPage;