import { useEffect, useState } from "react";
import { csv } from "d3-fetch";
import { scaleLinear } from "d3-scale";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const geoUrl = "/features.json";
const csvPath = "/highlightedRegions.csv";

const colorScale = scaleLinear<string>()
  .domain([0.29, 0.68])
  .range(["#ffedea", "#ff5233"]);

type CountryData = {
  ISO3: string;
  [year: string]: number | string;
};

type Props = {
  setTooltipContent: (content: string) => void;
};

const MapChart = ({ setTooltipContent }: Props) => {
  const [data, setData] = useState<CountryData[]>([]);

  useEffect(() => {
    csv(csvPath, (row) => ({
      ISO3: row.ISO3,
      "2025": +row["2025"], // convert to number
    })).then((parsed) => {
      setData(parsed);
    });
  }, []);

  return (
    <ComposableMap
      projectionConfig={{
        rotate: [-10, 0, 0],
        scale: 147,
      }}
    >
      {data.length > 0 && (
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const d = data.find((s) => s.ISO3 === geo.id);
              const fillColor = d ? colorScale(d["2025"] as number) : "#F5F4F6";
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => {
                    setTooltipContent(`${geo.properties.name}`);
                  }}
                  onMouseLeave={() => {
                    setTooltipContent("");
                  }}
                  style={{
                    default: {
                      fill: fillColor,
                    },
                    hover: {
                      fill: "#0072B1", // hover color
                      outline: "none",
                    },
                    // pressed: {
                    //   fill: "#E42",
                    //   outline: "none",
                    // },
                  }}
                />
              );
            })
          }
        </Geographies>
      )}
    </ComposableMap>
  );
};

export default MapChart;
