import { useState, useEffect } from "react";

export type StackItem = {
  label: string;
  value: number;
  color: string;
  paragraphs: string[];
  list?: string[];
};

type StackChartProps = {
  items: StackItem[];
  onSelect: (data: StackItem) => void;
};

const StackChart = ({ items, onSelect }: StackChartProps) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    if (selectedIndex !== null) {
      onSelect(items[selectedIndex]);
    }
  }, [selectedIndex, items, onSelect]);

  return (
    <div className="stack-chart">
      <div className="stack-bars">
        {items.map((item, i) => (
          <div
            key={i}
            className={`stack-bar ${selectedIndex === i ? "active" : ""}`}
            style={{ backgroundColor: item.color, flexGrow: item.value }}
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
