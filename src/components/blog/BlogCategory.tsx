import { Camera, FitnessCenter } from "@mui/icons-material";
import { BlogCategoryProps } from "./blogTypes";
import SwordIcon from "../shared/SwordIcon";

const BlogCategory = ({ onSelect }: BlogCategoryProps) => {
  const categories = [
    {
      id: "kendo",
      icon: <SwordIcon />,
      value: "kendo",
    },
    { id: "photography", icon: <Camera />, value: "photography" },
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
