import { PieChart } from "@mui/x-charts";

const skillColors = {
  coding: "rgba(76, 110, 145, 1)",
  kendo: "rgba(44, 62, 80, 1)",
  iaido: "rgba(28, 28, 28, 1)",
  fitness: "rgba(185, 92, 56, 1)",
  photography: "rgba(110, 90, 140, 1)",
};

const skillsData = [
  { label: "Coding", value: 40, color: skillColors.coding },
  { label: "Kendo", value: 30, color: skillColors.kendo },
  { label: "Iaido", value: 10, color: skillColors.iaido },
  { label: "Fitness", value: 20, color: skillColors.fitness },
  { label: "Photography", value: 10, color: skillColors.photography },
];

type SkillPieChartProps = {
  onSelect: (data: { label: string; value: number }) => void;
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
            outerRadius: 100,
            paddingAngle: 2,
            cornerRadius: 5,
            cx: 150,

            highlightScope: { fade: "global", highlight: "item" },
            faded: { innerRadius: 20, additionalRadius: -10, color: "gray" },
          },
        ]}
        width={350}
        height={450}
        onItemClick={(_, d) => onSelect(skillsData[d.dataIndex])}
        slotProps={{
          legend: {
            direction: "column", // or 'row'
            position: {
              vertical: "middle", // 'top' | 'middle' | 'bottom'
              horizontal: "right", // 'left' | 'center' | 'right'
            },
            itemMarkWidth: 20,
            itemGap: 10,
            markGap: 6,
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
