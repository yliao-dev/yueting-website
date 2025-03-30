import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useScrollIndex } from "../../hooks/useScrollIndex";

export type ProjectItemProps = {
  name: string;
  image: string;
  id: string | number;
};

function ProjectItem({ image, name, id }: ProjectItemProps) {
  const navigate = useNavigate();

  const [visibleIndex, setVisibleIndex] = useState<number | null>(null);
  const scrollRefs = useScrollIndex(setVisibleIndex, {
    threshold: 0.1,
    rootMargin: "-40% 0px -40% 0px",
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
        onClick={() => {
          navigate("project/" + id);
        }}
      >
        <img src={image} />
        <div className="portfolio__project__text">
          <h2>{name}</h2>
          <p>
            Project Type Project Type Project Type Project Type Project Type
            Project Type Project Type Project Type
          </p>
        </div>
      </div>
    </>
  );
}
export default ProjectItem;
