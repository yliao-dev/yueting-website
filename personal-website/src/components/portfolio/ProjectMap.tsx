import React from "react";
import Project, { ProjectItemProps } from "./Project";

const ProjectMap: React.FC<{ projectData: ProjectItemProps[] }> = ({
  projectData,
}) => {
  return (
    <>
      <div className="portfolio__project-list">
        {projectData.map((project, index) => (
          <Project
            key={index}
            id={index}
            name={project.name}
            image={project.image}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectMap;
