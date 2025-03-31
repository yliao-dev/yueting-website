import { PhotoViewerProps } from "./GalleryTypes";

const PhotoViewer = ({ imageUrl, onClose }: PhotoViewerProps) => {
  return (
    <>
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <img src={imageUrl} alt="Full view" className="modal-image" />
        </div>
      </div>
    </>
  );
};

export default PhotoViewer;
