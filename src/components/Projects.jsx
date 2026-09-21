import { useState } from "react";
import { portfolioData } from "../data/portfolioData";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  // Project categories based on technologies
  const projectCategories = [
    "All",
    "Game Development",
  ];

  // Enhanced project data with categories and images
  const filteredProjects =
    activeFilter === "All"
      ? portfolioData.projects
      : portfolioData.projects.filter(
          (project) => project.category === activeFilter
        );

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed":
        return "#4caf50";
      case "In Progress":
        return "#ff9800";
      case "Planning":
        return "#9c27b0";
      default:
        return "#666";
    }
  };

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">
          A collection of my work and personal projects
        </p>

        {/* Project Filters */}
        <div className="project-filters">
          {projectCategories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${
                activeFilter === category ? "active" : ""
              }`}
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className={`project-card ${project.featured ? "featured" : ""}`}
            >
              <div className="project-image">
                <div className="project-image-placeholder">
                  <img src={project.image} alt="projectImg" />
                </div>
                <div className="project-overlay">
                  <div className="project-actions">
                    <a
                      href={project.demoLink}
                      className="project-btn demo-btn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                      </svg>
                      Live Demo
                    </a>
                    <a
                      href={project.codeLink}
                      className="project-btn code-btn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                      </svg>
                      View Code
                    </a>
                  </div>
                </div>

                <span
                  className="project-status"
                  style={{ backgroundColor: getStatusColor(project.status) }}
                >
                  {project.status}
                </span>

                {project.featured && (
                  <span className="featured-badge">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                    Featured
                  </span>
                )}
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="technology-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-category">
                  <span className="category-tag">{project.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
