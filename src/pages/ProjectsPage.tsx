import styles from '../scss/ProjectsPage.module.scss'
import { projects } from '../data/projectsData';
import { Link } from 'react-router-dom';

console.log(styles)


function ProjectsPage() {
  return (
    <>
    <div className={styles['projects-page-text']}>
    <h2 className={styles['projects-page-title']}>
        PROJECTS
        </h2>
        <p className={styles['projects-page-subtitle']}>
        A Handpicked Array of Projects.
  </p>
  </div>
  <div className={styles.projectsGrid}>
        {projects.map((project) => (
          <Link key={project.id} to={project.link} target="_blank" className={styles.projectCard}>
            <div className={styles.projectTitle}>{project.title}</div>
            <div className={styles.projectImageWrapper}>
              <img src={project.image} alt={project.title} className={styles.projectImage} />
              <div className={styles.projectOverlay}>
                <div className={styles.projectView}>VIEW</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
        
        </>
  )
}

export default ProjectsPage