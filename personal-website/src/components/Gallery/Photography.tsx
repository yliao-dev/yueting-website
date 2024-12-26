import React, { useState } from "react";
import PhotoModal from "./PhotoModal";

export type PhotographyItemProps = {
  id: number;
  title: string;
  image: string;
  tags: string[];
};

const PhotographyItem: React.FC<PhotographyItemProps> = ({ title, image }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [image];

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <>
      <div className="masonry__item" onClick={openModal}>
        <img src={images[0]} alt={title} className="photography__item-image" />
      </div>

      <PhotoModal
        isOpen={isModalOpen}
        onClose={closeModal}
        images={images}
        currentIndex={currentIndex}
        onNext={nextImage}
        onPrev={prevImage}
      />
    </>
  );
};

export default PhotographyItem;
