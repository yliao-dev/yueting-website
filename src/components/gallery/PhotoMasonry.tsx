import { useState } from "react";
import PhotoViewer from "./PhotoViewer";
import { useScrollEffect } from "../../hooks/useScrollEffect";
import { PhotoItemProps } from "./galleryTypes";

interface PhotoMasonryProps {
  photoData: PhotoItemProps[];
}

const PhotoMasonry = ({ photoData }: PhotoMasonryProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [visibleIndexes, setVisibleIndexes] = useState(new Set<number>());
  const scrollRefs = useScrollEffect(
    (index) => {
      setVisibleIndexes((prev) => new Set(prev).add(index));
    },
    {
      threshold: 0.5,
      rootMargin: "-20% 0px -20% 0px",
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
        {photoData.map((photo, index) => {
          return (
            <div
              key={photo.id || index}
              className={`masonry__item ${
                visibleIndexes.has(index) ? "animate-fade-slide-up" : ""
              }`}
              data-index={index}
              ref={(el) => {
                if (el) scrollRefs.current[index] = el;
              }}
              onClick={() => openViewer(photo.image)}
            >
              <img
                loading="lazy"
                src={photo.thumb}
                alt={photo.title ?? "Photo"}
              />
            </div>
          );
        })}
      </div>

      {selectedImage && (
        <PhotoViewer imageUrl={selectedImage} onClose={closeViewer} />
      )}
    </>
  );
};

export default PhotoMasonry;
