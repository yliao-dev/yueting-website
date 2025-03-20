import { PhotoItemProps } from "./PhotoViewer";

interface PhotoMasonryProps {
  photoData: PhotoItemProps[];
  currentItem: string | null;
}

const PhotoMasonry = ({ photoData }: PhotoMasonryProps) => {
  return (
    <div className="masonry-grid">
      {photoData.map((photo) => (
        <div key={photo.id} className="masonry__item">
          <img src={photo.image} alt={photo.title} />
        </div>
      ))}
    </div>
  );
};

export default PhotoMasonry;
