import { PhotoViewerProps } from "./PhotoTypes";

const PhotoViewer = ({ imageUrl, onClose }: PhotoViewerProps) => {
  return (
    <>
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          {/* <button className="close-button" onClick={onClose}>
            &times;
          </button> */}
          <img src={imageUrl} alt="Full view" className="modal-image" />
        </div>
      </div>
    </>
  );
};

export default PhotoViewer;
