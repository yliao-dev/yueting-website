import "../styles/portfolio.css";
import "../styles/photography.css";

import DSCF4076 from "../assets/images/DSCF4076.jpg";
import LineBreak from "../components/LineBreak";

import ProjectMap from "../components/portfolio/ProjectMap";
import { ProjectData } from "../data/portfolio/ProjectData";
import PhotographyMap from "../components/Gallery/PhotographyMap";
import { PhotoData } from "../data/portfolio/PhotoData";

const PortfolioPage = () => {
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

        <ProjectMap projectData={ProjectData} />
      </div>
      <LineBreak variant="plain" />
      <PhotographyMap photoData={PhotoData} />
    </>
  );
};

export default PortfolioPage;
