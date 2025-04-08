import { useParams, Link } from "react-router-dom";
import { ProjectData } from "../data/project/projectData";
import PageNotFound from "./PageNotFound";
import ProjectSlideshow from "../components/portfolio/ProjectSlideShow";
import { GitHub } from "@mui/icons-material";
import NavigationArrows from "../components/shared/NavigationArrows";

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
        <NavigationArrows
          className="project__navigations"
          prev={
            index > 0
              ? {
                  label: "Prev Project",
                  to: `/portfolio/project/${ProjectData[index - 1].id}`,
                }
              : undefined
          }
          next={
            index < ProjectData.length - 1
              ? {
                  label: "Next Project",
                  to: `/portfolio/project/${ProjectData[index + 1].id}`,
                }
              : undefined
          }
          center={
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <GitHub
                className="project-github-icon"
                sx={{ fontSize: "3rem" }}
              />
            </a>
          }
        />
        <ProjectSlideshow images={project.images} />
      </section>
    </div>
  );
};

export default ProjectPage;
