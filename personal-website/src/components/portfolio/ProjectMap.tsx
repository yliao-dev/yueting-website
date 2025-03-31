import { ProjectItemProps } from "./portfolioTypes";
import Project from "./Project";

type ProjectMapProps = {
  projectData: ProjectItemProps[];
};

const ProjectMap = ({ projectData }: ProjectMapProps) => {
  return (
    <>
      {projectData.map((project, index) => (
        <Project
          key={index}
          id={index}
          name={project.name}
          image={project.image}
        />
      ))}
    </>
  );
};

export default ProjectMap;
