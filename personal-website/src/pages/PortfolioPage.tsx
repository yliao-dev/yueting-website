import ProjectItem from "../components/portfolio/ProjectItem";
import { ProjectItemData } from "../data/portfolio/ProjectItemData";
import "../styles/portfolio.css";
const PortfolioPage = () => {
  // Map through the project data and generate ProjectItem components
  const ProjectItemMap = () => {
    return (
      <>
        {ProjectItemData.map((project, index) => (
          <ProjectItem id={index} name={project.name} image={project.image} />
        ))}
      </>
    );
  };
  return (
    <>
      <div>
        <section className="portfolio">
          <div className="TODO text-content">
            <h1 className="TODO portfolio-title">My Portfolio</h1>
            <h2 className="TODO portfolio-description">
              Welcome to my portfolio! Here you'll find a collection of my work,
              including web development projects, design, and photography.
              Explore my projects and feel free to reach out for collaboration
              opportunities.
            </h2>
          </div>
          <div className="portfolio-image">
            <img src="https://via.placeholder.com/300x300" />
            <img src="https://via.placeholder.com/300x300" />
          </div>
        </section>
      </div>

      {/* Additional Portfolio Content can go here */}

      <section className="portfolio">
        <h2>Code Portfolio</h2>
        <div className="portfolio__project-list">
          <ProjectItemMap />
        </div>
      </section>
    </>
  );
};

export default PortfolioPage;
