import React, { useState, useEffect } from "react";
import { PhotoItemProps } from "./PhotoViewer";

const PhotoMap: React.FC<{
  photoData: PhotoItemProps[];
  currentItem: string | null;
}> = ({ photoData }) => {
  return (
    <>
      <div className="masonry">
        {photoData.map((photo, index) => (
          <div
            key={photo.id}
            className="masonry__item"
            // onClick={() => openViewer(index)}
          >
            <img
              src={photo.image}
              alt={photo.title}
              className="photography__item-image"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default PhotoMap;
