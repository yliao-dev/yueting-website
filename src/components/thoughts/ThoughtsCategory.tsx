import { Camera, Insights } from "@mui/icons-material";
import { ThoughtsCategoryProps } from "../../types/thoughtsTypes";
import KendoIcon from "../shared/KendoIcon";

const ThoughtsCategory = ({ onSelect }: ThoughtsCategoryProps) => {
  const categories = [
    { id: "insights", icon: <Insights />, value: "insights" },

    { id: "photography", icon: <Camera />, value: "photography" },
    {
      id: "kendo",
      icon: <KendoIcon />,
      value: "kendo",
    },
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
