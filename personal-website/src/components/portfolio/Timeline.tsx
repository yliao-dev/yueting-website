import { useEffect, useRef, useState } from "react";
const timelineItems = [
  {
    label: "University",
    year: "2018",
    detail:
      "Started first real coding at Rensselaer Polytechnic Institute, Troy, NY.",
  },
  {
    label: "Internship",
    year: "2020",
    detail:
      "Remote full-stack internship at a startup, building CRUD features using RESTful APIs and MySQL.",
  },
  {
    label: "Graduation",
    year: "2022",
    detail:
      "Earned B.S. in Computer Science from RPI with a focus on software development.",
  },
  {
    label: "First Job",
    year: "2022",
    detail:
      "Full-stack dev at Qualtrics — React, Go, CI/CD, APIs, and prod deployment. Collaborated with a an awesome team.",
  },
  {
    label: "Career Break",
    year: "2024",
    detail:
      "Took a break to reflect, travel, and grow beyond the code — visited 14 countries across Europe and Asia.",
  },
  {
    label: "This Site",
    year: "2025",
    detail: "Designed and coded this portfolio to share my journey and work.",
  },
  {
    label: "Next Move",
    year: "Today",
    detail:
      "Seeking software roles with technical challenge, meaningful work, and growth. Open to relocation for the next step in my journey.",
  },
];

const JourneyTimeline = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(
    timelineItems.length - 1
  );
  const [visibleIndex, setVisibleIndex] = useState<number | null>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"));
          if (entry.isIntersecting) {
            setVisibleIndex(index);
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: "-40% 0px -40% 0px", // focus near vertical center
      }
    );
    stepRefs.current.forEach((ref) => ref && observer.observe(ref));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="timeline-container">
      <div className="timeline-wrapper">
        {timelineItems.map((item, index) => (
          <div
            key={index}
            data-index={index}
            onClick={() => setActiveIndex(index === activeIndex ? null : index)}
            ref={(el) => (stepRefs.current[index] = el)}
            className="timeline-step"
          >
            <div className="timeline-top hoverable">
              <div
                className={`timeline-dot ${
                  index === visibleIndex ? "active" : ""
                }`}
              />
              {index < timelineItems.length - 1 && (
                <div className="timeline-connector" />
              )}
            </div>
            <div className="timeline-text">
              <h2>{item.label}</h2>
              <p>{item.year}</p>
              {index === visibleIndex && <p>{item.detail}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JourneyTimeline;
