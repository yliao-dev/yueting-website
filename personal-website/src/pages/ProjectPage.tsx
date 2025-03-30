import { useParams } from "react-router-dom";
import { ProjectData } from "../data/ProjectData";
import PageNotFound from "./PageNotFound";
import ProjectSlideshow from "../components/portfolio/ProjectSlideShow";

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
        </section>
        <section className="project__images">
          <ProjectSlideshow
            images={[
              "/images/gallery/DSCF00008.jpg",
              "/images/gallery/DSCF0430.jpg",
              "/images/gallery/DSCF2406.jpg",
            ]}
          />

          <button>Next Project</button>
        </section>
      </div>
    </>
  );
};
export default ProjectPage;
