import { useState } from "react";
import { PhotoItemProps } from "./PhotoTypes";
import PhotoViewer from "./PhotoViewer";
import { useScrollIndex } from "../../hooks/useScrollIndex";

interface PhotoMasonryProps {
  photoData: PhotoItemProps[];
}

const PhotoMasonry = ({ photoData }: PhotoMasonryProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const [visibleIndex, setVisibleIndex] = useState<number | null>(null);
  const scrollRefs = useScrollIndex(setVisibleIndex, {
    threshold: 0.3,
    rootMargin: "-30% 0px -30% 0px",
  });

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
            className={`masonry__item ${
              visibleIndex === 0 ? "animate-fade-slide-up" : ""
            }`}
            data-index={0}
            ref={(el) => {
              if (el) scrollRefs.current[0] = el;
            }}
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
