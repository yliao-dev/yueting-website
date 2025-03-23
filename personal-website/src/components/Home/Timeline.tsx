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
  return (
    <div className="timeline-container">
      <div className="timeline-wrapper">
        {timelineItems.map((item, index) => (
          <div key={index} className="timeline-step">
            <div className="timeline-top">
              <div className="timeline-dot" />
              {index < timelineItems.length - 1 && (
                <div className="timeline-connector" />
              )}
            </div>
            <div className="timeline-label">{item.location}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JourneyTimeline;
