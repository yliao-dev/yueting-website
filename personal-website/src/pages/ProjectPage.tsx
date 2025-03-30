import { useParams } from "react-router-dom";
import { ProjectData } from "../data/ProjectData";

const ProjectPage = () => {
  const { id } = useParams();
  const project = ProjectData.find((p) => String(p.id) === id);

  if (!project) return <div>Project not found.</div>;

  return (
    <>
      <div className="project-page">
        <h1>{project.name}</h1>
        <img src={project.image} alt={project.name} className="project-image" />
        <p className="project-description">{project.description}</p>
        <div className="project-tags">
          {project.tags?.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </>
  );
};
export default ProjectPage;
