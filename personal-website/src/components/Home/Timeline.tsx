const timelineItems = [
  "Hunan, China",
  "New York City, NY, USA",
  "Troy, NY, USA",
  "Los Angeles, CA, USA",
  "Provo, Utah, USA",
  "Łódź, Poland",
];

const JourneyTimeline = () => {
  return (
    <div className="horizontal-timeline">
      {timelineItems.map((location, index) => (
        <div className="timeline-step" key={index}>
          <div className="timeline-dot" />
          {index < timelineItems.length - 1 && (
            <div className="timeline-connector" />
          )}
          <div className="timeline-label">
            <p>{location}</p>
            <img
              src="/images/london.png"
              alt="location"
              className="home__timeline__image"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default JourneyTimeline;
