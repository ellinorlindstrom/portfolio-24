import '../scss/ProjectsPage.scss'
import { projects } from '../data/projectsData';
import { Link } from 'react-router-dom';


function ProjectsPage() {
  return (
    <>
    <div className='projects-page-text'>
    <h2 className='projects-page-title'>
        PROJECTS
        </h2>
        <p className='projects-page-subtitle'>
        A Handpicked Array of Projects.
  </p>
  </div>
  <div className='projectsGrid'>
        {projects.map((project) => (
          <Link key={project.id} to={project.link} target="_blank" className='projectCard'>
            <div className='projectTitle'>{project.title}</div>
            <div className='projectImageWrapper'>
              <img src={project.image} alt={project.title} className='projectImage' />
              <div className='projectOverlay'>
                <div className='projectView'>VIEW</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
        
        </>
  )
}

export default ProjectsPage