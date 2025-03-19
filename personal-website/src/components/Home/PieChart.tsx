import { PieChart } from "@mui/x-charts";

const skillsData = [
  { label: "Coding", value: 40, color: "#345c72" },
  { label: "Kendo", value: 30, color: "#2a2e30" },
  { label: "Fitness", value: 20, color: "#f46530" },
  { label: "Photography", value: 10, color: "#8064A2" },
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
