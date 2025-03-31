import { useNavigate, useParams } from "react-router-dom";
import { ProjectData } from "../data/projects/projectData";
import PageNotFound from "./PageNotFound";
import ProjectSlideshow from "../components/portfolio/ProjectSlideShow";
import { GitHub } from "@mui/icons-material";

const ProjectPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const index = ProjectData.findIndex((p) => String(p.id) === id);
  const project = ProjectData[index];

  if (!project) return <PageNotFound />;

  const Prev = () => {
    if (index > 0) {
      navigate(`/portfolio/project/${ProjectData[index - 1].id}`);
    }
  };

  const Next = () => {
    if (index < ProjectData.length - 1) {
      navigate(`/portfolio/project/${ProjectData[index + 1].id}`);
    }
  };

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
          <div className="project__buttons">
            {index > 0 && (
              <button className="slideshow__arrow" onClick={Prev}>
                &#10094; Previous Project
              </button>
            )}

            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <GitHub className="project-github-icon" />
            </a>

            {index < ProjectData.length - 1 && (
              <button className="slideshow__arrow" onClick={Next}>
                Next Project &#10095;
              </button>
            )}
          </div>
        </section>
        <ProjectSlideshow images={project.images} />
      </div>
    </>
  );
};
export default ProjectPage;
