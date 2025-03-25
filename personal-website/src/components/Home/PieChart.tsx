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

export const skillsData: SkillItem[] = [
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
          <br /> <br />
          What I usually build with:
        </p>
        <ul>
          <li>React</li>
          <li>Go</li>
          <li>Python</li>
          <li>Postman</li>
          <li>Jenkins</li>
          <li>Splunk</li>
          <li>Git</li>
        </ul>
      </>
    ),
  },
  {
    label: "Kendo",
    value: 25,
    color: skillColors.kendo,
    context: (
      <>
        <p>
          Kendo shapes more than just physical skill—it builds presence,
          patience, and awareness. It’s a practice of clarity, both in movement
          and mindset. I started Kendo as a freshman in university, earned my
          shodan in early 2024, and have trained in dojos across the U.S. and
          around the world.
          <br /> <br />
          My Go-to Waza:
        </p>
        <ul>
          <li>Debana-Men</li>
          <li>Katate-Tsuki</li>
          <li>Gyaku-Do</li>
        </ul>
      </>
    ),
  },
  {
    label: "Iaido",
    value: 10,
    color: skillColors.iaido,
    context: (
      <>
        <p>
          For me, Iaido is a calm practice that sharpens precision and control.
          I began learning Musō Jikiden Eishin-ryū in Salt Lake City, Utah, with
          a brief experience in Toyama Ryū in Orem. Though still early in my
          journey, it complements my path in Kendo and deepens my appreciation
          for disciplined movement.
        </p>
      </>
    ),
  },
  {
    label: "Fitness",
    value: 20,
    color: skillColors.fitness,
    context: (
      <>
        <p>
          My training centers on strength, explosiveness, and stability. Injury
          prevention comes before aesthetics, and athletic performance over
          appearance. Most of it happens with just a barbell.
          <br /> <br />
          My Go-to lifts:
        </p>
        <ul>
          <li>Power clean</li>
          <li>Jump squat</li>
          <li>Weighted pull-ups</li>
          <li>Standing press</li>
          <li>Turkish Get-Up</li>
        </ul>
      </>
    ),
  },
  {
    label: "Photography",
    value: 10,
    color: skillColors.photography,
    context: (
      <>
        <p>
          Photography lets me chase light, frame feeling, and preserve moments
          that might quietly disappear. <br /> <br /> My usual captures:
        </p>
        <ul>
          <li>Street</li>
          <li>Travel</li>
          <li>Portrait</li>
          <li>Everyday scenes</li>
        </ul>
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
              fontWeight: 550,
            },
          },
        }}
      />
    </>
  );
};

export default SkillPieChart;
