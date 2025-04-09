import { useEffect, useRef, useState } from "react";
import { PhotoViewerProps } from "./galleryTypes";
import NavigationArrows from "../shared/NavigationArrows";

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

  useEffect(() => {
    document.body.classList.add("no-scroll");
    return () => document.body.classList.remove("no-scroll");
  }, []);

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
          loading="eager"
        />

        {imageLoaded && (
          <NavigationArrows
            prev={
              hasPrev
                ? {
                    onClick: (e) => {
                      e.stopPropagation();
                      onPrev?.();
                    },
                  }
                : undefined
            }
            next={
              hasNext
                ? {
                    onClick: (e) => {
                      e.stopPropagation();
                      onNext?.();
                    },
                  }
                : undefined
            }
            className="modal-navigation"
          />
        )}
      </div>
    </div>
  );
};

export default PhotoViewer;
