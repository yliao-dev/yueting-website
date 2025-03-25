import React from "react";
import { Camera, SportsMartialArts, FitnessCenter } from "@mui/icons-material";

type BlogCategoryProps = {
  onSelect: (category: string) => void;
};

const BlogCategory: React.FC<BlogCategoryProps> = ({ onSelect }) => {
  const categories = [
    { id: "photography", icon: <Camera />, value: "photography" },
    { id: "kendo", icon: <SportsMartialArts />, value: "kendo" },
    { id: "fitness", icon: <FitnessCenter />, value: "fitness" },
  ];

  return (
    <>
      <div className="blog__category">
        {categories.map((category) => (
          <button
            key={category.id}
            className="blog__category-button"
            onClick={() => onSelect(category.value)}
          >
            {category.icon}
          </button>
        ))}
      </div>
    </>
  );
};

export default BlogCategory;
