import { GeoJSON } from "react-leaflet";
import provinces from "./wojewodztwa-medium.json";
import {
  StyledMap,
  DefaultProvince,
  HoveredProvince,
  Container,
} from "./styles.js";
import { useNavigate } from "react-router-dom";

const Map = () => {
  let navigate = useNavigate();
  const OnEachProvince = (
    feature,
    layer,
    previousClickedLayer,
    previousHoveredLayer
  ) => {
    layer.on({
      click: (event) => {
        navigate(`/provinces/${event.target.feature.properties.id}`, {
          state: { province: event.target.feature.properties.nazwa },
        });
      },

      mouseover: (event) => {
        if (
          event.target !== previousClickedLayer ||
          previousHoveredLayer === null
        ) {
          event.target.setStyle(HoveredProvince);
        }
        previousHoveredLayer = event.target;
      },

      mouseout: (event) => {
        if (previousHoveredLayer !== previousClickedLayer) {
          previousHoveredLayer.setStyle({
            ...DefaultProvince,
            fillColor: feature.properties.fillColor,
          });
        }
      },
    });
  };

  return (
    <Container>
      <StyledMap
        center={[51.918904, 19.1343786]}
        zoom={6}
        scrollWheelZoom={false}
        zoomControl={false}
      >
        {provinces.features.map((feature) => (
          <GeoJSON
            key={feature.id}
            data={feature}
            pathOptions={{
              ...DefaultProvince,
              fillColor: feature.properties.fillColor,
            }}
            onEachFeature={OnEachProvince}
          />
        ))}
      </StyledMap>
    </Container>
  );
};

export default Map;
