import { ComposableMap, Geographies, Geography } from "react-simple-maps";

interface Geo {
  rsmKey: string;
  properties: Record<string, any>;
  geometry: {
    type: string;
    coordinates: any;
  };
}

interface GeographiesRenderProps {
  geographies: Geo[];
}

const WorldMap = () => (
  <div>
    <ComposableMap>
      <Geographies geography="/features.json">
        {({ geographies }: GeographiesRenderProps) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
    </ComposableMap>
  </div>
);

export default WorldMap;
