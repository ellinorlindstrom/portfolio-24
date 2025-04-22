import "../scss/ProjectsPage.scss";
import { projects } from "../data/projectsData";
import { Link } from "react-router-dom";

function ProjectsPage() {
  return (
    <div className="projects-page-container">
      <div className="projects-page-text">
        <h2 className="projects-page-title">PROJECTS</h2>
        {/*   <p className="projects-page-subtitle">
            A Curated Selection.
          </p> */}
      </div>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <Link to={project.link} target="_blank" className="project-link">
              <div className="project-title">
                {project.title} {project.description}
              </div>
              {/* <div className="projectDescription">{project.description}</div> */}
              <div className="project-image-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
                <div className="project-overlay">
                  <div className="project-view">VIEW</div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectsPage;
