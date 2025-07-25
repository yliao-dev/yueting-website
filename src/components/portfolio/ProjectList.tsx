import { ProjectListProps } from "../../types/portfolioTypes";
import ProjectItem from "./Project";

const ProjectMap = ({ projectData }: ProjectListProps) => {
  const sortedProjects = [...projectData].sort(
    (a, b) => Number(b.id) - Number(a.id)
  );

  return (
    <>
      {sortedProjects.map((project) => (
        <ProjectItem
          key={project.id}
          id={project.id}
          name={project.name}
          focus={project.focus}
          description={project.description}
          tags={project.tags}
          coverImage={project.coverImage}
          images={project.images}
          link={project.link}
        />
      ))}
    </>
  );
};

export default ProjectMap;
