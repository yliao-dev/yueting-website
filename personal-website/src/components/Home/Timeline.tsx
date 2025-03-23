const timelineItems = [
  { location: "Hunan, China" },
  { location: "New York City, NY, USA" },
  { location: "Troy, NY, USA" },
  { location: "Los Angeles, CA, USA" },
  { location: "Provo, Utah, USA" },
  { location: "Łódź, Poland" },
];

const JourneyTimeline = () => {
  return (
    <div className="timeline-container">
      <div className="timeline-wrapper">
        {timelineItems.map((item, index) => (
          <div key={index} className="timeline-step">
            <div className="timeline-top">
              <div className="timeline-dot" />
              {index < timelineItems.length && (
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
