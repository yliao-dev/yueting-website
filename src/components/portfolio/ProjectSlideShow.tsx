import { useEffect, useState } from "react";
import PhotoViewer from "../gallery/PhotoViewer";
import NavigationArrows from "../shared/NavigationArrows";

const ProjectSlideshow = ({ images }: { images: string[] }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    setCurrent(0); // Reset to first image
  }, [images]);

  const prev = () =>
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const next = () =>
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const openViewer = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };
  const closeViewer = () => {
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

      <NavigationArrows
        className="slideshow__navigations"
        prev={{ onClick: prev }}
        next={{ onClick: next }}
        center={
          <div className="navigation-center slideshow__dots">
            {images.map((_, i) => (
              <span
                key={i}
                className={`slideshow__dot ${i === current ? "active" : ""}`}
                onClick={() => setCurrent(i)}
              />
            ))}
          </div>
        }
      />
    </div>
  );
};

export default ProjectSlideshow;
