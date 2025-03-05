//import { Link } from 'react-router-dom';
import { Container, Col } from 'react-bootstrap';
import '../scss/HomePage.scss';

function HomePage() {
  return (
    <Container fluid className=' home-page-container'>

        <Col xl={10}  lg={10} md={8} sm={8} xs={8}>
          <div className='home-page-text'>
            <div className='home-page-content'>
            <h1 className='home-page-title'>
            <a href='https://elleportfolio.netlify.app/' target='_blank' rel='noreferrer' className="h1-link">
              FRONTEND<br />DEVELOPER
              </a>
            </h1>
            <p className='home-page-subtitle'>
              Driven and curious Front End Developer student with enthusiasm for UX/UI, motion and interaction.
            </p> 
           {/*  <Link className='rotating-container' to='/projects'>
            <svg className='rotating-text' viewBox="0 0 100 100">
              <path id="circlePath" d="
                M 50, 50
                m -37, 0
                a 37,37 0 1,1 74,0
                a 37,37 0 1,1 -74,0" fill="none" />
              <text fill="#D6594C">
                <textPath href="#circlePath">
                PROJECTS &nbsp; PROJECTS 
                </textPath>
              </text>
            </svg>
          </Link> */}
          </div>
   
          </div>
        </Col>
    </Container>
  )
}

export default HomePage;
