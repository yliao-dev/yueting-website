import { useState, useEffect } from "react";
import { SkillData } from "../../data/home/skillData";

type StackChartProps = {
  items: SkillData[];
  onSelect: (data: SkillData) => void;
  animate?: boolean;
};

const StackChart = ({ items, onSelect, animate }: StackChartProps) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    if (selectedIndex !== null) {
      onSelect(items[selectedIndex]);
    }
  }, [selectedIndex, items, onSelect]);

  const maxValue = Math.max(...items.map((item) => item.value));

  return (
    <div className="stack-chart">
      <div className="stack-bars">
        {items.map((item, i) => (
          <div
            key={i}
            className={`stack-bar 
              ${selectedIndex === i ? "active" : ""}
              ${selectedIndex !== null && selectedIndex !== i ? "dimmed" : ""}
              ${animate ? "animate-bar" : ""}
              `}
            style={{
              backgroundColor: item.color,
              width: `${(item.value / maxValue) * 100}%`,
            }}
            onClick={() => setSelectedIndex(i)}
          >
            <span className="stack-label">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StackChart;
