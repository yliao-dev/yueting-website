import { PhotoViewerProps } from "./galleryTypes";

const PhotoViewer = ({
  imageUrl,
  onClose,
  onPrev,
  onNext,
  hasPrev,
  hasNext,
}: PhotoViewerProps) => {
  return (
    <>
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          {hasPrev && (
            <button className="nav-left" onClick={onPrev}>
              ←
            </button>
          )}
          <img src={imageUrl} alt="Full view" className="modal-image" />
          {hasNext && (
            <button className="nav-right" onClick={onNext}>
              →
            </button>
          )}
          <button className="modal-close" onClick={onClose}>
            ✕
          </button>
        </div>
      </div>
    </>
  );
};

export default PhotoViewer;
