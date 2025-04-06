export type BlogPostProp = {
  id: string | number;
  title: string;
  description: string;
  category: string;
  date: string;
  coverImage: string;
  mdPath: string;
};

export type BlogCategoryProps = {
  onSelect: (category: string) => void;
};
