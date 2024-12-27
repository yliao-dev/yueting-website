import React from "react";

// Define the PhotoItemProps type for consistent usage
export type PhotoItemProps = {
  id: string | number;
  title: string;
  image: string;
  tags: string[];
};

// Define the PhotoViewer props interface
interface PhotoViewerProps {
  isOpen: boolean;
  onClose: () => void;
  images: PhotoItemProps[];
  currentIndex: number;
  onNext: () => void;
  onPrev: () => void;
}

const PhotoViewer: React.FC<PhotoViewerProps> = ({
  isOpen,
  onClose,
  images,
  currentIndex,
  onNext,
  onPrev,
}) => {
  if (!isOpen) return null;

  return (
    <div className="photo-viewer">
      <button className="close-button" onClick={onClose}>
        Close
      </button>
      <div className="image-container">
        <button className="prev-button" onClick={onPrev}>
          Previous
        </button>
        <img
          src={images[currentIndex].image}
          alt={images[currentIndex].title}
        />
        <button className="next-button" onClick={onNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default PhotoViewer;
