import { useEffect, useRef, useState } from "react";
import { PhotoViewerProps } from "./galleryTypes";

const PhotoViewer = ({
  imageUrl,
  onClose,
  onPrev,
  onNext,
  hasPrev,
  hasNext,
}: PhotoViewerProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const startX = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (startX.current === null) return;
    const endX = e.changedTouches[0].clientX;
    const diffX = startX.current - endX;

    if (diffX > 50 && hasNext) onNext?.();
    if (diffX < -50 && hasPrev) onPrev?.();

    startX.current = null;
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" && hasNext) onNext?.();
      if (e.key === "ArrowLeft" && hasPrev) onPrev?.();
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [hasNext, hasPrev, onNext, onPrev, onClose]);

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <img
          src={imageUrl}
          alt="Full view"
          className="modal-image"
          onLoad={() => setImageLoaded(true)}
        />

        {imageLoaded && (
          <div className="modal-bottom-arrows">
            {hasPrev && (
              <button
                className="arrow-left"
                onClick={(e) => {
                  e.stopPropagation();
                  onPrev?.();
                }}
              >
                &#10094;
              </button>
            )}
            {hasNext && (
              <button
                className="arrow-right"
                onClick={(e) => {
                  e.stopPropagation();
                  onNext?.();
                }}
              >
                &#10095;
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default PhotoViewer;
