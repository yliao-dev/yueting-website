import { ProjectListProps } from "./portfolioTypes";
import ProjectItem from "./Project";

const ProjectMap = ({ projectData }: ProjectListProps) => {
  return (
    <>
      {projectData.map((project) => (
        <ProjectItem
          key={project.id}
          id={project.id}
          name={project.name}
          coverImage={project.coverImage}
          images={project.images}
          description={project.description}
          tags={project.tags}
        />
      ))}
    </>
  );
};

export default ProjectMap;
