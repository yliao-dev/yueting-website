export type ProjectItemProps = {
  id: string | number;
  name: string;
  focus: string;
  description: string;
  tags: string[];
  coverImage: string;
  images: string[]; // For slideshow in ProjectPage
  link: string;
};

export type ProjectListProps = {
  projectData: ProjectItemProps[];
};
