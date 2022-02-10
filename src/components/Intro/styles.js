import styled, { keyframes } from "styled-components";
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
  font-size: 220px;
  color: #260101;
  position: absolute;
  left: 80px;
  bottom: 0px;
`;

export const StartButton = styled.div`
  position: fixed;
  display: flex;
  flex-direction: row;
  bottom: 20%;
  right: 20%;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.primaryUi};
  color: ${(props) => props.theme.colors.white};
  font-family: ${(props) => props.theme.fontFamily.secondaryFont};
  font-size: 25px;
  padding: 1em 2em;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: #df9b89;
    animation-play-state: paused;
  }
`;

const translation = keyframes`
  0%{
      transform: translateX(15px);
  }
  10%{
    transform: translateX(0px);
  }
  20%{
      transform: translateX(15px);
  }
  30%{
    transform: translateX(0px);
  }
  
  100%{
    transform: translateX(0px);
  }
`;

export const Span1 = styled.span`
  color: white;
  display: block;
  margin-left: 1em;
  color: ${(props) => props.theme.colors.white};
  animation: ${translation} 1s 0.3s infinite both ease-in;
  transition: 0.5s;
`;
