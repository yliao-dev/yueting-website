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

const SkillPieChart = () => (
  <PieChart
    series={[
      {
        data: skillsData,
        startAngle: -10,
        innerRadius: 20,
        outerRadius: 100,
        paddingAngle: 2,
        cornerRadius: 5,
        cx: 150,
      },
    ]}
    width={400}
    height={400}
  />
);

export default SkillPieChart;
