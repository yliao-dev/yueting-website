import ProjectItem from "../components/portfolio/ProjectItem";
import { ProjectItemData } from "../data/portfolio/ProjectItemData";
import DSCF4076 from "../assets/images/DSCF4076.jpg";
import "../styles/portfolio.css";
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
      <div className="portfolio">
        <section className="portfolio__intro">
          <h1>Portfolio</h1>
          <h3>
            Welcome to my portfolio. Here you'll find a collection of my work,
            including web development projects, design, and photography. Explore
            my projects and feel free to reach out for collaboration
            opportunities.
          </h3>
          <img src={DSCF4076} className="portfolio__intro__image" />
        </section>

        <div className="page-divider" />

        <section className="portfolio__project-list">
          <ProjectItemMap />
        </section>
      </div>
    </>
  );
};

export default PortfolioPage;
