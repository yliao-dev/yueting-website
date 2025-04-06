import { useState } from "react";
import PhotoViewer from "../gallery/PhotoViewer";

const ProjectSlideshow = ({ images }: { images: string[] }) => {
  const [current, setCurrent] = useState(0);
  const prev = () =>
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const next = () =>
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const openViewer = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };
  const closeViewer = () => {
    console.log("Closing viewer");

    setSelectedImage(null);
  };
  return (
    <div className="slideshow">
      {selectedImage && (
        <PhotoViewer imageUrl={selectedImage} onClose={closeViewer} />
      )}

      <img
        src={images[current]}
        alt={`Slide ${current + 1}`}
        className="slideshow__image"
        onClick={() => openViewer(images[current])}
      />

      <div className="slideshow__controls">
        <button className="slideshow__arrow" onClick={prev}>
          &#10094;
        </button>

        <div className="slideshow__dots">
          {images.map((_, index) => (
            <span
              key={index}
              className={`slideshow__dot ${index === current ? "active" : ""}`}
              onClick={() => setCurrent(index)}
            />
          ))}
        </div>
        <button className="slideshow__arrow" onClick={next}>
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default ProjectSlideshow;
