import { useState } from "react";

const timelineItems = [
  {
    label: "RPI",
    detail: "Studied CS at Rensselaer Polytechnic Institute (2018–2022)",
  },
  { label: "Internship", detail: "Software engineering internship (2020)" },
  { label: "Graduated", detail: "Earned B.S. in Computer Science (2022)" },
  {
    label: "Qualtrics",
    detail: "Worked as a full-stack developer (2022–2024)",
  },
  { label: "Transition", detail: "Left job to explore and reflect (2024)" },
  { label: "Travel", detail: "Lived abroad, worked remotely (2024–2025)" },
  {
    label: "This Site",
    detail: "Created this portfolio to showcase my journey (2025)",
  },
  {
    label: "To Be Continued",
    detail: "Looking for meaningful new projects ✨",
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
            <div className="timeline-label">
              {item.label}
              {index === activeIndex && (
                <div className="timeline-detail">{item.detail}</div>
              )}
            </div>{" "}
          </div>
        ))}
      </div>
    </div>
  );
};

export default JourneyTimeline;
