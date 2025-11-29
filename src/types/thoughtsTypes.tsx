export type PostItemProp = {
  id: string | number;
  title: string;
  author: string;
  description: string;
  category: string;
  date: string;
  coverImage: string;
  mdPath: string;
  mdPath2?: string;
};

export type ThoughtsCategoryProps = {
  onSelect: (category: string) => void;
};

export interface ThoughtsAuthorProps {
  author: string;
  date: string;
}

export interface PostMeta {
  title: string;
  author: string;
  date: string;
  tags?: string[];
}
