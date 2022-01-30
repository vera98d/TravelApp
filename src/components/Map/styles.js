import { MapContainer } from "react-leaflet";
import styled from "styled-components";

export const MyMap = styled(MapContainer)`
  width: 500px;
  height: 500px;
`;

export const DefaultProvince = {
  color: `#620505`,
  fillColor: "#D42A2A",
  fillOpacity: 0.3,
  opacity: 1.0,
};

export const HoveredProvince = {
  color: `#620505`,
  fillColor: "#E5E5E5",
  fillOpacity: 0.7,
};

export const SelectedProvince = {
  fillColor: "green",
  color: "#620505",
  fillOpacity: 0.4,
};
