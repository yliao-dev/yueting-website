import { Camera, SportsMartialArts, FitnessCenter } from "@mui/icons-material";
import { NavLink } from "react-router-dom";

const BlogCategory = () => {
  const categories = [
    { id: "camera", icon: <Camera />, path: "/camera" },
    { id: "sports", icon: <SportsMartialArts />, path: "/sports" },
    { id: "fitness", icon: <FitnessCenter />, path: "/fitness" },
  ];
  const categoryClass = ({ isActive }: { isActive: boolean }) =>
    `blog__category-icon ${isActive ? "active" : ""}`;

  return (
    <div className="blog__category">
      {categories.map((category) => (
        <NavLink
          key={category.id}
          to={category.path}
          className={({ isActive }) => categoryClass({ isActive })}
        >
          {category.icon}
        </NavLink>
      ))}
    </div>
  );
};

export default BlogCategory;
