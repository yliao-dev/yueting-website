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
          <h1>Projects</h1>
          <p>
            My journey in coding started with curiosity and grew into a passion.
            Here, you’ll find projects that solve problems, automate tasks, and
            bring ideas to life. Whether it’s a small experiment or a full
            project, I hope you can see how my ideas come to life through code.
          </p>
        </section>

        <LineBreak />
        <section className="portfolio__project-list">
          <ProjectMap projectData={ProjectData} />
        </section>
      </div>
    </>
  );
};

export default PortfolioPage;
