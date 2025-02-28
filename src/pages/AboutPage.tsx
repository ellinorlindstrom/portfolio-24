import { Link } from 'react-router-dom';
import '../scss/AboutPage.scss';

function AboutPage() {
  return (
    <div className='about-page-text'>
    <h2 className='about-page-title'>
        ABOUT</h2>
        <p className='about-page-subtitle'>
        I’m a <i>curious</i> and <b>enthusiastic</b> developer with a passion for  immersive, and captivating experiences.💫 <br />
        I am currently an intern at <a href='https://coolstuff.se' target='_blank' rel='noopener noreferrer'>Coolstuff</a>, learning about the ins and outs of web development. For inquiries, contact me <Link className='animatedUnderline' to='/contact'>here:)</Link> 
  </p>
        </div>
  )
}

export default AboutPage