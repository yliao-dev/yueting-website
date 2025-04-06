import { useNavigate, useParams } from "react-router-dom";
import { ProjectData } from "../data/project/projectData";
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
            {index > 0 && (
              <button className="project__navigations__arrow" onClick={Prev}>
                &#10094; Prev Project
              </button>
            )}

            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <GitHub
                className="project-github-icon"
                sx={{ fontSize: "3rem" }}
              />
            </a>

            {index < ProjectData.length - 1 && (
              <button className="project__navigations__arrow" onClick={Next}>
                Next Project &#10095;
              </button>
            )}
          </div>
          <ProjectSlideshow images={project.images} />
        </section>
      </div>
    </>
  );
};
export default ProjectPage;
