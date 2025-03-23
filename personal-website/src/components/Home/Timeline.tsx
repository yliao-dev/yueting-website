import { useState } from "react";
const timelineItems = [
  {
    label: "University",
    year: "2018–2022",
    detail:
      "Studied Computer Science at Rensselaer Polytechnic Institute, Troy, NY.",
  },
  {
    label: "Internship",
    year: "2020",
    detail:
      "Software engineering internship — real-world experience during university.",
  },
  {
    label: "Graduation",
    year: "2022",
    detail:
      "Earned B.S. in Computer Science from RPI with a focus on full-stack development.",
  },
  {
    label: "First Job",
    year: "2022–2024",
    detail:
      "Worked at Qualtrics as a full-stack developer, building user-facing tools.",
  },
  {
    label: "Career Break",
    year: "2024",
    detail: "Left my role to reflect, recharge, and explore new directions.",
  },
  {
    label: "Remote Life",
    year: "2024–2025",
    detail:
      "Traveled and worked remotely while building side projects and freelancing.",
  },
  {
    label: "Portfolio Website",
    year: "2025",
    detail: "Designed and coded this portfolio to share my journey and work.",
  },
  {
    label: "Next Chapter",
    year: "2025+",
    detail:
      "Open to creative and meaningful opportunities that challenge and inspire me.",
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
