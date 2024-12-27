import React, { useState, useEffect } from "react";
import PhotoViewer, { PhotoItemProps } from "./PhotoViewer";
import { useNavigate } from "react-router-dom";

const PhotoMap: React.FC<{
  photoData: PhotoItemProps[];
  currentItem: string | null;
}> = ({ photoData, currentItem }) => {
  const navigate = useNavigate();
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  // Check if currentItem is set, and if so, open the Viewer for that image.
  useEffect(() => {
    if (currentItem) {
      const index = photoData.findIndex((photo) => photo.id === currentItem);
      if (index >= 0) {
        setCurrentImageIndex(index);
        setIsViewerOpen(true);
      }
    }
  }, [currentItem, photoData]);

  const openViewer = (index: number) => {
    setCurrentImageIndex(index);
    setIsViewerOpen(true);
    navigate(`/gallery?item=${photoData[index].id}`);
  };

  const closeViewer = () => {
    setIsViewerOpen(false);
    navigate("/gallery"); // Clear the query parameter
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % photoData.length);
    navigate(
      `/gallery?item=${
        photoData[(currentImageIndex + 1) % photoData.length].id
      }`
    );
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + photoData.length) % photoData.length
    );
    navigate(
      `/gallery?item=${
        photoData[(currentImageIndex - 1 + photoData.length) % photoData.length]
          .id
      }`
    );
  };

  return (
    <>
      <div className="masonry">
        {photoData.map((photo, index) => (
          <div
            key={photo.id}
            className="masonry__item"
            onClick={() => openViewer(index)}
          >
            <img
              src={photo.image}
              alt={photo.title}
              className="photography__item-image"
            />
          </div>
        ))}
      </div>

      {isViewerOpen && (
        <PhotoViewer
          images={photoData}
          currentIndex={currentImageIndex}
          onClose={closeViewer}
          onNext={nextImage}
          onPrev={prevImage}
          isOpen={false}
        />
      )}
    </>
  );
};

export default PhotoMap;
