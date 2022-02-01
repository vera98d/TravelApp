import { TileLayer, GeoJSON } from "react-leaflet";
import provinces from "./wojewodztwa-medium.json";
import { StyledMap, DefaultProvince, HoveredProvince } from "./styles.js";
import { useNavigate } from "react-router-dom";

const Map = () => {
  let navigate = useNavigate();
  const OnEachProvince = (
    province,
    layer,
    previousClickedLayer,
    previousHoveredLayer
  ) => {
    layer.on({
      click: (event) => {
        navigate(
          `/team-jo-project-2/provinces/${event.target.feature.properties.id}`,
          { state: { province: event.target.feature.properties.nazwa } }
        );
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
          previousHoveredLayer.setStyle(DefaultProvince);
        }
      },
    });
  };

  return (
    <StyledMap
      center={[51.918904, 19.1343786]}
      zoom={6}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <GeoJSON
        data={provinces.features}
        pathOptions={DefaultProvince}
        onEachFeature={OnEachProvince}
      />
    </StyledMap>
  );
};

export default Map;
