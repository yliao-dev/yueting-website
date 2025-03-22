import { PieChart } from "@mui/x-charts";

export type SkillItem = {
  label: string;
  value: number;
  color: string;
  context: string | JSX.Element; // <== This allows either plain text or JSX
};

const skillColors = {
  coding: "rgba(76, 110, 145, 1)",
  kendo: "rgba(44, 62, 80, 1)",
  iaido: "rgba(28, 28, 28, 1)",
  fitness: "rgba(185, 92, 56, 1)",
  photography: "rgba(110, 90, 140, 1)",
};

const skillsData: SkillItem[] = [
  {
    label: "Coding",
    value: 35,
    color: skillColors.coding,
    context: (
      <>
        <p>
          I like writing code to simplify life by building applications that
          solve real problems. This site you’re exploring is built with React
          and Go — keeping things fast, clean, and purposeful.
        </p>
        <div className="skill__stack">
          <p>What I usually build with:</p>
          <ul className="skill__list">
            <li>React</li>
            <li>Go</li>
            <li>Python</li>
            <li>Jenkins</li>
            <li>Git</li>
          </ul>
        </div>
      </>
    ),
  },
  {
    label: "Kendo",
    value: 25,
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
    context: (
      <>
        <p>
          Photography lets me chase light, frame feeling, and preserve moments
          that might quietly disappear.
        </p>
        <div className="skill__stack">
          <p>My usual captures:</p>
          <ul className="skill__list">
            <li>Street</li>
            <li>Travel</li>
            <li>Portrait</li>
            <li>Everyday scenes</li>
          </ul>
        </div>
      </>
    ),
  },
];

type SkillPieChartProps = {
  onSelect: (data: SkillItem) => void;
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
