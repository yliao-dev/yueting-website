import { useState } from "react";

const timelineItems = [
  { location: "Hunan, China", message: "Where everything began." },
  {
    location: "New York City, NY, USA",
    message: "The energy of the big city.",
  },
  {
    location: "Troy, NY, USA",
    message: "Studied at RPI, my coding journey started.",
  },
  {
    location: "Los Angeles, CA, USA",
    message: "West coast vibes and sunshine.",
  },
  { location: "Provo, Utah, USA", message: "Training, working, and growing." },
  {
    location: "Łódź, Poland",
    message: "Exploring Europe and working remotely.",
  },
];

const JourneyTimeline = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="horizontal-timeline">
      {timelineItems.map((item, index) => (
        <div className="timeline-step" key={index}>
          <div className="timeline-top" onClick={() => setActiveIndex(index)}>
            <div
              className={`timeline-dot ${
                activeIndex === index ? "active" : ""
              }`}
            />
            {index < timelineItems.length - 1 && (
              <div className="timeline-connector" />
            )}
          </div>
          <div className="timeline-label">
            <p>{item.location}</p>
            <img
              src="/images/london.png"
              alt="location"
              className="home__timeline__image"
            />
            {activeIndex === index && (
              <div className="timeline-message">{item.message}</div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default JourneyTimeline;
