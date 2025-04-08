import { useRef } from "react";
import { PhotoViewerProps } from "./galleryTypes";

const PhotoViewer = ({
  imageUrl,
  onClose,
  onPrev,
  onNext,
  hasPrev,
  hasNext,
}: PhotoViewerProps) => {
  const startX = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (startX.current === null) return;
    const endX = e.changedTouches[0].clientX;
    const diffX = startX.current - endX;

    if (diffX > 50 && hasNext) onNext?.(); // Swipe left → Next
    if (diffX < -50 && hasPrev) onPrev?.(); // Swipe right → Prev

    startX.current = null;
  };

  return (
    <>
      <div
        className="modal-overlay"
        onClick={onClose}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <img src={imageUrl} alt="Full view" className="modal-image" />

          <div className="modal-bottom-nav">
            {hasPrev && (
              <button
                className="nav-left"
                onClick={(e) => {
                  e.stopPropagation();
                  onPrev?.();
                }}
              >
                ←
              </button>
            )}
            {hasNext && (
              <button
                className="nav-right"
                onClick={(e) => {
                  e.stopPropagation();
                  onNext?.();
                }}
              >
                →
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default PhotoViewer;
