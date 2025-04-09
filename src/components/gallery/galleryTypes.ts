export type GalleryCollectionProps = {
  title: string;
  slug: string;
  photos: PhotoItemProps[];
};

export type PhotoItemProps = {
  id: string | number;
  title?: string;
  thumb: string;
  image: string;
  date?: string;
  location?: string;
  tags?: string[];
  width: number;
  height: number;
};

export type PhotoViewerProps = {
  imageUrl: string;
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
  hasPrev?: boolean;
  hasNext?: boolean;
  prevImage?: string;
  nextImage?: string;
};

export interface PhotoMasonryProps {
  photoData: PhotoItemProps[];
}
