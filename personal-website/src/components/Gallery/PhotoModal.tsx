import React from "react";

type PhotoModalProps = {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  currentIndex: number;
  onNext: () => void;
  onPrev: () => void;
};

const PhotoModal: React.FC<PhotoModalProps> = ({
  isOpen,
  onClose,
  images,
  currentIndex,
  onNext,
  onPrev,
}) => {
  if (!isOpen) return null;

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <img
          src={images[currentIndex]}
          alt="Full view"
          className="modal-image"
        />
      </div>
      <div className="modal-navigation">
        <button className="prev" onClick={onPrev}>
          &lt;
        </button>
        <button className="next" onClick={onNext}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default PhotoModal;
