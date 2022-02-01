import styled from "styled-components";
import img from "../../../src/introImage.jpg";

export const Container = styled.div`
  background-image: url(${img});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100vw;
  min-height: 100vh;
  filter: invert(25%);
`;

export const Title1 = styled.h1`
  margin: 0;
  font-family: ${(props) => props.theme.fontFamily.primaryFont};
  font-weight: 400;
  font-size: 300px;
  color: #260101;
  position: absolute;
  left: 70px;
  bottom: 200px;
`;

export const Title2 = styled.h1`
  margin: 0;
  font-family: ${(props) => props.theme.fontFamily.primaryFont};
  font-weight: 400;
  font-size: 230px;
  color: #260101;
  position: absolute;
  left: 70px;
  bottom: 0px;
`;
