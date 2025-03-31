import { useParams } from "react-router-dom";
import { ProjectData } from "../data/projects/projectData";
import PageNotFound from "./PageNotFound";
import ProjectSlideshow from "../components/portfolio/ProjectSlideShow";
import { GitHub } from "@mui/icons-material";

const ProjectPage = () => {
  const { id } = useParams();
  const project = ProjectData.find((p) => String(p.id) === id);

  if (!project) return <PageNotFound />;

  return (
    <>
      <div className="project">
        <section className="project__text">
          <h2>{project.name}</h2>
          <p>{project.description}</p>
          <div className="project__tags">
            {project.tags?.map((tag) => (
              <span key={tag} className="project__tag">
                {tag}
              </span>
            ))}
          </div>
          <div>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <GitHub className="project-github-icon" />
            </a>
            <button>Next Project</button>
          </div>
        </section>
        <ProjectSlideshow images={project.images} />
      </div>
    </>
  );
};
export default ProjectPage;
