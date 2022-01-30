import { TileLayer, GeoJSON } from "react-leaflet";

import provinces from "./wojewodztwa-medium.json";
import {
  StyledMap,
  DefaultProvince,
  SelectedProvince,
  HoveredProvince,
} from "./styles.js";

let previousClickedLayer = null;
let previousHoveredLayer = null;

function onEachProvince(province, layer) {
  layer.on({
    click: (event) => {
      if (previousClickedLayer !== null) {
        previousClickedLayer.setStyle(DefaultProvince);
      }
      event.target.setStyle(SelectedProvince);
      alert("Selected province: " + event.target.feature.properties.nazwa);
      previousClickedLayer = event.target;
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
}

const Map = () => {
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
        onEachFeature={onEachProvince}
      />
    </StyledMap>
  );
};

export default Map;
