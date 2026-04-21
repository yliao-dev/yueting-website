import { useEffect, useState } from "react";
import { csv } from "d3-fetch";
import { FeatureCollection, Geometry } from "geojson";
import {
  ComposableMap,
  Geographies,
  Geography,
  Graticule,
  Sphere,
  ZoomableGroup,
} from "react-simple-maps";

const csvPath = "/highlightedRegions.csv";
const geoJsonPath = "/features.json";

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
  const [countryData, setCountryData] = useState<CountryData[]>([]);
  const [geoFeatures, setGeoFeatures] =
    useState<FeatureCollection<Geometry> | null>(null);
  const [resetKey, setResetKey] = useState(0);

  useEffect(() => {
    // Fetch CSV
    csv(csvPath, (row) => ({
      ISO3: row.ISO3,
      Name: row.Name,
      Lived: +row.Lived,
      Travelled: +row.Travelled,
    })).then(setCountryData);

    // Fetch GeoJSON
    fetch(geoJsonPath)
      .then((res) => res.json())
      .then(setGeoFeatures);
  }, []);

  return (
    <>
      <button
        className="reset__view"
        onClick={() => setResetKey((prev) => prev + 1)}
      >
        Reset View
      </button>

      <ComposableMap
        projection="geoNaturalEarth1"
        projectionConfig={{
          scale: 150,
          center: [0, 20],
        }}
        height={400}
        width={800}
      >
        <Sphere stroke="#c9baa7" strokeWidth={1} fill="#f8f3eb" id={""} />
        <Graticule stroke="#ded2c2" strokeWidth={0.5} />
        <ZoomableGroup center={[-12, 35]} zoom={1} key={resetKey}>
          {geoFeatures && (
            <Geographies geography={geoFeatures}>
              {({ geographies }) =>
                geographies.map((geo) => {
                  const d = countryData.find((s) => s.ISO3 === geo.id);

                  let fillColor = "#efe7dc";
                  if (d) {
                    if (d.Lived === 1) fillColor = "#8a2432";
                    else if (d.Travelled === 1) fillColor = "#46556c";
                  }

                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      tabIndex={-1}
                      data-tooltip-id="map-tooltip"
                      onMouseEnter={() => {
                        setTooltipContent(d ? d.Name : geo.properties.name);
                      }}
                      onMouseLeave={() => {
                        setTooltipContent("");
                      }}
                      style={{
                        default: { fill: fillColor, outline: "none" },
                        hover: { fill: "#9a7752", outline: "none" },
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
