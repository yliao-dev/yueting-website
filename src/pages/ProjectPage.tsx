import { useParams, Link } from "react-router-dom";
import { ProjectData } from "../data/project/projectData";
import PageNotFound from "./PageNotFound";
import ProjectSlideshow from "../components/portfolio/ProjectSlideShow";
import { GitHub } from "@mui/icons-material";

const ProjectPage = () => {
  const { id } = useParams();
  const index = ProjectData.findIndex((p) => String(p.id) === id);
  const project = ProjectData[index];

  if (!project) return <PageNotFound />;

  return (
    <div className="project">
      <section className="project__text">
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          <h2>{project.name}</h2>
        </a>
        <p>{project.description}</p>
        <div className="project__tags">
          {project.tags?.map((tag) => (
            <span key={tag} className="project__tag">
              {tag}
            </span>
          ))}
        </div>
      </section>

      <section className="project__slideshow">
        <div className="project__navigations">
          <div>
            {index > 0 && (
              <Link
                className="navigations__arrow"
                to={`/portfolio/project/${ProjectData[index - 1].id}`}
              >
                &#10094; Prev Project
              </Link>
            )}
          </div>
          <div>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <GitHub
                className="project-github-icon"
                sx={{ fontSize: "3rem" }}
              />
            </a>
          </div>
          <div>
            {index < ProjectData.length - 1 && (
              <Link
                className="navigations__arrow"
                to={`/portfolio/project/${ProjectData[index + 1].id}`}
              >
                Next Project &#10095;
              </Link>
            )}
          </div>
        </div>
        <ProjectSlideshow images={project.images} />
      </section>
    </div>
  );
};

export default ProjectPage;
