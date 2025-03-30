import { useParams } from "react-router-dom";
import { ProjectData } from "../data/ProjectData";
import PageNotFound from "./PageNotFound";
import LineBreak from "../components/LineBreak";

const ProjectPage = () => {
  const { id } = useParams();
  const project = ProjectData.find((p) => String(p.id) === id);

  if (!project) return <PageNotFound />;

  return (
    <>
      <div className="project">
        <section className="project__text">
          <h1>{project.name}</h1>
          <p>{project.description}</p>
          <div>
            {project.tags?.map((tag) => (
              <span key={tag} className="project__tag">
                {tag}
              </span>
            ))}
          </div>
        </section>
        <section className="project__images">
          <img
            src="/images/gallery/DSCF7886.jpg"
            className="project__intro__image"
            alt="project"
          />
        </section>
      </div>
    </>
  );
};
export default ProjectPage;
