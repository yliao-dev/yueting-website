import { Camera, FitnessCenter } from "@mui/icons-material";
import { ThoughtsCategoryProps } from "../../types/thoughtsTypes";
import KendoIcon from "../shared/KendoIcon";

const ThoughtsCategory = ({ onSelect }: ThoughtsCategoryProps) => {
  const categories = [
    {
      id: "kendo",
      icon: <KendoIcon />,
      value: "kendo",
    },
    { id: "photography", icon: <Camera />, value: "photography" },
    { id: "fitness", icon: <FitnessCenter />, value: "fitness" },
  ];

  return (
    <>
      <div className="thoughts__category">
        {categories.map((category) => (
          <button
            key={category.id}
            className="thoughts__category-button"
            onClick={() => onSelect(category.value)}
          >
            {category.icon}
          </button>
        ))}
      </div>
    </>
  );
};

export default ThoughtsCategory;
