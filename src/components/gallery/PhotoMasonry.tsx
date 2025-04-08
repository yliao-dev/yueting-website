import { useState } from "react";
import PhotoViewer from "./PhotoViewer";
import { useScrollEffect } from "../../hooks/useScrollEffect";
import { PhotoItemProps } from "./galleryTypes";

interface PhotoMasonryProps {
  photoData: PhotoItemProps[];
}

const PhotoMasonry = ({ photoData }: PhotoMasonryProps) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
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
  const openViewer = (index: number) => {
    setSelectedIndex(index);
  };

  const closeViewer = () => {
    setSelectedIndex(null);
  };

  const showPrev = () => {
    if (selectedIndex !== null && selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
    }
  };

  const showNext = () => {
    if (selectedIndex !== null && selectedIndex < photoData.length - 1) {
      setSelectedIndex(selectedIndex + 1);
    }
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
              onClick={() => openViewer(index)}
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

      {selectedIndex !== null && (
        <PhotoViewer
          imageUrl={photoData[selectedIndex].image}
          onClose={closeViewer}
          onPrev={showPrev}
          onNext={showNext}
          hasPrev={selectedIndex > 0}
          hasNext={selectedIndex < photoData.length - 1}
        />
      )}
    </>
  );
};

export default PhotoMasonry;
