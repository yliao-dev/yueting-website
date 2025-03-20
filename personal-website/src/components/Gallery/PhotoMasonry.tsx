import { useState } from "react";
import { PhotoItemProps } from "./PhotoTypes";
import PhotoViewer from "./PhotoViewer";

interface PhotoMasonryProps {
  photoData: PhotoItemProps[];
  currentItem: string | null;
}

const PhotoMasonry = ({ photoData }: PhotoMasonryProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const openViewer = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };
  const closeViewer = () => {
    setSelectedImage(null);
  };
  return (
    <>
      <div className="masonry-grid">
        {photoData.map((photo) => (
          <div
            key={photo.id}
            className="masonry__item"
            onClick={() => openViewer(photo.image)}
          >
            <img src={photo.image} alt={photo.title} />
          </div>
        ))}
      </div>
      {selectedImage && (
        <PhotoViewer imageUrl={selectedImage} onClose={closeViewer} />
      )}
    </>
  );
};

export default PhotoMasonry;
