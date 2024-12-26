import React from "react";
import Photography, { PhotographyItemProps } from "./Photography";

const PhotographyMap: React.FC<{ photoData: PhotographyItemProps[] }> = ({
  photoData,
}) => {
  return (
    <>
      <div className="masonry">
        {photoData.map((photo, index) => (
          <Photography
            key={index}
            id={index}
            title={photo.title}
            image={photo.image}
            tags={photo.tags}
          />
        ))}
      </div>
    </>
  );
};

export default PhotographyMap;
