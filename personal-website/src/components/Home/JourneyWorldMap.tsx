import { useEffect, useState } from "react";
import { csv } from "d3-fetch";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";

const geoUrl = "/features.json";
const csvPath = "/highlightedRegions.csv";

type CountryData = {
  ISO3: string;
  Name: string;
  Lived: number;
  Travelled: number;
};

type Props = {
  setTooltipContent: (content: string) => void;
};

const MapChart = ({ setTooltipContent }: Props) => {
  const [data, setData] = useState<CountryData[]>([]);

  useEffect(() => {
    csv(csvPath, (row) => ({
      ISO3: row.ISO3,
      Name: row.Name,
      Lived: +row.Lived,
      Travelled: +row.Travelled,
    })).then((parsed) => {
      setData(parsed);
    });
  }, []);

  return (
    <>
      <ComposableMap
        projection="geoNaturalEarth1"
        projectionConfig={{
          scale: 150,
          center: [0, 20],
        }}
        height={400}
        width={800}
      >
        <ZoomableGroup center={[-12, 35]} zoom={1.5}>
          {data.length > 0 && (
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => {
                  const d = data.find((s) => s.ISO3 === geo.id);

                  let fillColor = "#F5F4F6"; // default gray
                  if (d) {
                    if (d.Lived === 1) fillColor = "#0072b1"; // dark blue
                    else if (d.Travelled === 1) fillColor = "#89c2d9"; // light blue
                  }

                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      tabIndex={-1}
                      className="focus:outline-none"
                      data-tooltip-id="map-tooltip"
                      onMouseEnter={() => {
                        if (d) {
                          setTooltipContent(d.Name);
                        } else {
                          setTooltipContent(geo.properties.name);
                        }
                      }}
                      onMouseLeave={() => {
                        setTooltipContent("");
                      }}
                      style={{
                        default: {
                          fill: fillColor,
                          outline: "none",
                        },
                        hover: {
                          fill: "#d2b48c", // green on hover
                          outline: "none",
                        },
                        // pressed: {
                        //   fill: "#38b000",
                        //   outline: "none",
                        // },
                      }}
                    />
                  );
                })
              }
            </Geographies>
          )}
        </ZoomableGroup>
      </ComposableMap>
    </>
  );
};

export default MapChart;
