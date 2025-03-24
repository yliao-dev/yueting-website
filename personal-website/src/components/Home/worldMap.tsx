import { useState, useEffect } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { csv } from "d3-fetch";

type CountryData = {
  ISO3: string;
  [year: string]: string; // Or `number` if you're parsing it later
};

const geoUrl = "/features.json";

const WorldMap = ({ setTooltipContent }: any) => {
  const [data, setData] = useState<CountryData[]>([]);

  useEffect(() => {
    csv("/highlightedRegions.csv").then((rows) => {
      const parsed = rows.map((row) => ({
        ISO3: row.ISO3 as string,
        "2025": row["2025"] as string, // or +row["2025"] for number
      }));
      setData(parsed);
    });
  }, []);

  return (
    <div data-tip="">
      <ComposableMap
        projectionConfig={{
          rotate: [-10, 0, 0],
          scale: 147,
        }}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const d = data.find((s) => s.ISO3 === geo.id);
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
                      fill: d ? d["2025"] : "#0072B1",
                      outline: "none",
                    },
                    // hover: {
                    //   fill: "#0072B1",
                    //   outline: "none",
                    // },
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
      </ComposableMap>
    </div>
  );
};

export default WorldMap;
