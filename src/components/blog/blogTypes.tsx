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

export interface BlogAuthorProps {
  author: string;
  date: string;
}

export interface PostMeta {
  title: string;
  author: string;
  date: string;
  tags?: string[];
}
