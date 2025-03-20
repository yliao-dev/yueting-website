export type PhotoItemProps = {
  id: string | number;
  title: string;
  image: string;
  tags: string[];
};

export type PhotoViewerProps = {
  imageUrl: string;
  onClose: () => void;
};
