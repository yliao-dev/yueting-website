import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useScrollEffect } from "../../hooks/useScrollEffect";
import { ProjectItemProps } from "../../../types/portfolioTypes";

function ProjectItem({ id, name, focus, coverImage }: ProjectItemProps) {
  const navigate = useNavigate();

  const [visibleIndex, setVisibleIndex] = useState<number | null>(null);
  const scrollRefs = useScrollEffect(setVisibleIndex, {
    threshold: 0.1,
    rootMargin: "-20% 0px -20% 0px",
  });

  return (
    <>
      <div
        className={`portfolio__project ${
          visibleIndex === 0 ? "animate-fade-slide-up" : ""
        }`}
        data-index={0}
        ref={(el) => {
          if (el) scrollRefs.current[0] = el;
        }}
        onClick={() => navigate(`/portfolio/project/${id}`)}
      >
        <img src={coverImage} alt={name} />
        <div className="portfolio__project__text">
          <h2>{name}</h2>
          <p>{focus}</p>
        </div>
      </div>
    </>
  );
}
export default ProjectItem;
