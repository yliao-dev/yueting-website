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
