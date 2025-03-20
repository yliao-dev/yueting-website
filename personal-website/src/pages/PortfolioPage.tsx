import "../styles/portfolio.css";
import "../styles/gallery.css";

import LineBreak from "../components/LineBreak";

import ProjectMap from "../components/portfolio/ProjectMap";
import { ProjectData } from "../data/portfolio/ProjectData";

const PortfolioPage = () => {
  return (
    <>
      <div className="portfolio">
        <section className="portfolio__intro">
          <h1>A Collection of Code and Creativity</h1>
          <p>
            My journey in coding started with curiosity and grew into a passion.
            Here, you’ll find projects that solve problems, automate tasks, and
            bring ideas to life. Whether it’s a small experiment or a larger
            project, each one is a step toward mastering the art of programming.
            Take a look at my work and see what I’ve been building.
          </p>
        </section>

        <LineBreak />
        <div className="portfolio__project-list">
          <ProjectMap projectData={ProjectData} />
        </div>
      </div>
    </>
  );
};

export default PortfolioPage;
