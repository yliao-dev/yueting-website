import ProjectItem from "../components/ProjectItem";
import { ProjectItemData } from "../data/ProjectItemData";
const PortfolioPage = () => {
  // Map through the project data and generate ProjectItem components
  const ProjectItemMap = () => {
    return (
      <>
        {ProjectItemData.map((project, index) => (
          <ProjectItem
            key={index}
            id={index}
            name={project.name}
            image={project.image}
          />
        ))}
      </>
    );
  };
  return (
    <>
      {/* <div>
        <section className="portfolio-intro">
          <div className="text-content">
            <h1 className="portfolio-title">My Portfolio</h1>
            <h2 className="portfolio-description">
              Welcome to my portfolio! Here you'll find a collection of my work,
              including web development projects, design, and photography.
              Explore my projects and feel free to reach out for collaboration
              opportunities.
            </h2>
          </div>
          <div className="portfolio-image">
            <img src="https://via.placeholder.com/700x400" />
            <img src="https://via.placeholder.com/600x400" />
          </div>
        </section>
      </div> */}

      {/* Additional Portfolio Content can go here */}

      <section className="projects">
        <h2>Code Portfolio</h2>
        <div className="project-list">
          <ProjectItemMap />
        </div>
      </section>
    </>
  );
};

export default PortfolioPage;
