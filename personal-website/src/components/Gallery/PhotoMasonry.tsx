import { PhotoItemProps } from "./PhotoViewer";

interface PhotoMasonryProps {
  photoData: PhotoItemProps[];
  currentItem: string | null;
}

const PhotoMasonry = ({ photoData }: PhotoMasonryProps) => {
  return (
    <div className="masonry">
      {photoData.map((photo) => (
        <div key={photo.id} className="masonry__item">
          <img
            src={photo.image}
            alt={photo.title}
            className="photography__item-image"
          />
        </div>
      ))}
    </div>
  );
};

export default PhotoMasonry;
