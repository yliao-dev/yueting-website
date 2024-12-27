import React, { useState } from "react";
import PhotoViewer, { PhotoItemProps } from "./PhotoViewer";

const PhotoItem: React.FC<PhotoItemProps> = ({ id, title, image, tags }) => {
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Define an array of image objects (each object follows PhotoItemProps)
  const images = [{ id, title, image, tags }]; // Wrap the image in an object

  const openViewer = () => setIsViewerOpen(true);
  const closeViewer = () => setIsViewerOpen(false);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <>
      <div className="masonry__item" onClick={openViewer}>
        <img src={image} alt={title} className="Photo__item-image" />
      </div>

      {/* Open PhotoViewer when isViewerOpen is true */}
      <PhotoViewer
        isOpen={isViewerOpen}
        onClose={closeViewer}
        images={images}
        currentIndex={currentIndex}
        onNext={nextImage}
        onPrev={prevImage}
      />
    </>
  );
};

export default PhotoItem;
