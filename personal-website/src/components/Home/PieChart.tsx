import { PieChart } from "@mui/x-charts";

const skillColors = {
  coding: "rgba(76, 110, 145, 1)",
  kendo: "rgba(44, 62, 80, 1)",
  iaido: "rgba(28, 28, 28, 1)",
  fitness: "rgba(185, 92, 56, 1)",
  photography: "rgba(110, 90, 140, 1)",
};

const skillsData = [
  {
    label: "Coding",
    value: 40,
    color: skillColors.coding,
    context:
      "I spend most of my time writing code across full-stack projects—bringing ideas to life through design systems, APIs, and user experiences.",
  },
  {
    label: "Kendo",
    value: 30,
    color: skillColors.kendo,
    context:
      "Kendo sharpens not only the body, but also the mind. It teaches presence, patience, and respect—both on and off the dojo floor.",
  },
  {
    label: "Iaido",
    value: 10,
    color: skillColors.iaido,
    context:
      "Iaido is about precision, awareness, and intention in every movement. A quiet practice that continues to teach me stillness in action.",
  },
  {
    label: "Fitness",
    value: 20,
    color: skillColors.fitness,
    context:
      "Training is my way to reset and recharge. I focus on strength and mobility, always chasing balance between performance and longevity.",
  },
  {
    label: "Photography",
    value: 10,
    color: skillColors.photography,
    context:
      "I enjoy capturing quiet details and unspoken moments—photography helps me observe the world more slowly and intentionally.",
  },
];

type SkillPieChartProps = {
  onSelect: (data: { label: string; context: string }) => void;
};

const SkillPieChart = ({ onSelect }: SkillPieChartProps) => {
  return (
    <>
      <PieChart
        series={[
          {
            arcLabel: (item) => `${item.value}%`,
            data: skillsData,
            startAngle: -20,
            innerRadius: 20,
            outerRadius: 120,
            paddingAngle: 2,
            cornerRadius: 5,
            cx: "70%",

            highlightScope: { fade: "global", highlight: "item" },
            faded: { innerRadius: 20, additionalRadius: -10, color: "gray" },
          },
        ]}
        width={500}
        height={500}
        onItemClick={(_, d) => onSelect(skillsData[d.dataIndex])} // d: PieItemIdentifier
        slotProps={{
          legend: {
            direction: "column", // or 'row'
            position: {
              vertical: "middle", // 'top' | 'middle' | 'bottom'
              horizontal: "left", // 'left' | 'center' | 'right'
            },
            itemMarkWidth: 20,
            itemGap: 18,
            markGap: 7,
            labelStyle: {
              fontSize: 14,
              fontWeight: 500,
            },
          },
        }}
      />
    </>
  );
};

export default SkillPieChart;
