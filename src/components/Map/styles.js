import { MapContainer } from "react-leaflet";
import styled from "styled-components";
import gif from "../../../src/bike.gif";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 40px 20px;
  background-image: url(${gif});
  background-size: 400px;
  background-repeat: no-repeat;
  background-position: bottom left;
`;

export const StyledMap = styled(MapContainer)`
  width: 600px;
  height: 600px;
  background-color: white;

  a {
    display: none;
  }
`;

export const DefaultProvince = {
  color: `#fff`,
  fillColor: "#BF7D65C4",
  fillOpacity: 1,
  opacity: 1.0,
};

export const HoveredProvince = {
  color: `#fff`,
  fillColor: "#DAE5E5",
  fillOpacity: 0.7,
};
