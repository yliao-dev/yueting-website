export type PostItemProp = {
  id: string | number;
  title: string;
  author: string;
  description: string;
  category: string;
  date: string;
  coverImage: string;
  mdPath: string;
};

export type BlogCategoryProps = {
  onSelect: (category: string) => void;
};
