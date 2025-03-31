import LineBreak from "../components/shared/LineBreak";
import ProjectMap from "../components/portfolio/ProjectMap";
import { ProjectData } from "../data/projects/projectData";
import JourneyTimeline from "../components/portfolio/Timeline";
import { useTypingEffect } from "../hooks/useTypingEffect";

const PortfolioPage = () => {
  const titleText = useTypingEffect("Projects");
  return (
    <>
      <div className="portfolio">
        <section className="portfolio__intro__text">
          <h1 className="typing-cursor">{titleText}</h1>
          <p>
            Each project here starts with a practical need—or a spark of
            curiosity. I began coding while studying Computer Science at
            Rensselaer Polytechnic Institute, followed by two years of
            full-stack development work. I’m always open to collaborating on
            meaningful or fun projects.
          </p>
        </section>

        <section className="portfolio__timeline">
          <JourneyTimeline />
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
