import { useState } from "react";
import { PhotoItemProps } from "./PhotoTypes";
import PhotoViewer from "./PhotoViewer";
import { useScrollIndex } from "../../hooks/useScrollIndex";

interface PhotoMasonryProps {
  photoData: PhotoItemProps[];
}

const PhotoMasonry = ({ photoData }: PhotoMasonryProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const [visibleIndexes, setVisibleIndexes] = useState(new Set<number>());
  const scrollRefs = useScrollIndex(
    (index) => {
      setVisibleIndexes((prev) => new Set(prev).add(index));
    },
    {
      threshold: 0.3,
      rootMargin: "-30% 0px -30% 0px",
    }
  );
  const openViewer = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };
  const closeViewer = () => {
    setSelectedImage(null);
  };
  return (
    <>
      <div className="masonry-grid">
        {photoData.map((photo, index) => (
          <div
            key={photo.id}
            className={`masonry__item ${
              visibleIndexes.has(index) ? "animate-fade-slide-up" : ""
            }`}
            data-index={index}
            ref={(el) => {
              if (el) scrollRefs.current[index] = el;
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
