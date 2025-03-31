export type ProjectItemProps = {
  id: string | number;
  name: string;
  coverImage: string;
  images: string[]; // For slideshow in ProjectPage
  description: string;
  tags: string[];
};

export type ProjectListProps = {
  projectData: ProjectItemProps[];
};
