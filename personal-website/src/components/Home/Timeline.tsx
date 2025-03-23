import { useState } from "react";
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
    label: "Next Chapter",
    year: "Today",
    detail:
      "Exploring software roles that combine technical growth, impact, and teamwork.",
  },
];

const JourneyTimeline = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  return (
    <div className="timeline-container">
      <div className="timeline-wrapper">
        {timelineItems.map((item, index) => (
          <div
            key={index}
            className="timeline-step"
            onClick={() => setActiveIndex(index === activeIndex ? null : index)}
          >
            <div className="timeline-top hoverable">
              <div
                className={`timeline-dot ${
                  index === activeIndex ? "active" : ""
                }`}
              />
              {index < timelineItems.length - 1 && (
                <div className="timeline-connector" />
              )}
            </div>
            <div className="timeline-text">
              <div>{item.label}</div>
              <div className="timeline-year">{item.year}</div>
              {index === activeIndex && (
                <div className="timeline-detail">{item.detail}</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JourneyTimeline;
