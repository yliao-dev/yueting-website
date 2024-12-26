import Project from "../components/portfolio/Project";
import { ProjectData } from "../data/portfolio/ProjectData";
import DSCF4076 from "../assets/images/DSCF4076.jpg";
import LineBreak from "../components/LineBreak";
import "../styles/portfolio.css";

const PortfolioPage = () => {
  const ProjectMap = () => {
    return (
      <>
        {ProjectData.map((project, index) => (
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

        <LineBreak variant="plain" />

        <section className="portfolio__project-list">
          <ProjectMap />
        </section>
      </div>
    </>
  );
};

export default PortfolioPage;
