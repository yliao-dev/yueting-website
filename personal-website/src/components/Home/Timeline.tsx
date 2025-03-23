import { useState } from "react";

const timelineItems = [
  {
    location: "Hunan, China",
    message: "Where everything began.",
    img: "/images/hunan.png",
  },
  {
    location: "New York City, NY, USA",
    message: "The energy of the big city.",
    img: "/images/nyc.png",
  },
  {
    location: "Troy, NY, USA",
    message: "Studied at RPI, my coding journey started.",
    img: "/images/rpi.png",
  },
  {
    location: "Los Angeles, CA, USA",
    message: "West coast vibes and sunshine.",
    img: "/images/la.png",
  },
  {
    location: "Provo, Utah, USA",
    message: "Training, working, and growing.",
    img: "/images/provo.png",
  },
  {
    location: "Łódź, Poland",
    message: "Exploring Europe and working remotely.",
    img: "/images/lodz.png",
  },
];

const JourneyTimeline = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="timeline-container">
      <div className="timeline-wrapper">
        {timelineItems.map((item, index) => (
          <div key={index} className="timeline-step">
            <div className="timeline-top">
              <div
                className={`timeline-dot ${
                  activeIndex === index ? "active" : ""
                }`}
                onClick={() =>
                  setActiveIndex(index === activeIndex ? null : index)
                }
              />
              {index < timelineItems.length - 1 && (
                <div className="timeline-connector" />
              )}
            </div>

            <div className="timeline-label">
              <p className="timeline-location">{item.location}</p>
              <img
                src={item.img}
                alt={item.location}
                className="timeline-image"
              />
              {activeIndex === index && (
                <div className="timeline-message">{item.message}</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JourneyTimeline;
