import { useState } from "react";

type Props = {
  images: string[];
};

const ProjectSlideshow = ({ images }: Props) => {
  const [current, setCurrent] = useState(0);

  const goPrev = () =>
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  const goNext = () =>
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <div className="slideshow">
      <div className="slideshow__image-wrapper">
        <img
          src={images[current]}
          alt={`Slide ${current + 1}`}
          className="slideshow__image"
        />
        <button className="slideshow__arrow left" onClick={goPrev}>
          &#10094;
        </button>
        <button className="slideshow__arrow right" onClick={goNext}>
          &#10095;
        </button>
      </div>

      <div className="slideshow__dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`slideshow__dot ${index === current ? "active" : ""}`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectSlideshow;
