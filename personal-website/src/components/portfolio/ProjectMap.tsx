import React from "react";
import Project, { ProjectItemProps } from "./Project";

const ProjectMap: React.FC<{ projectData: ProjectItemProps[] }> = ({
  projectData,
}) => {
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
