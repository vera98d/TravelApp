import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.headerBackground};
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 0 40px 0;
  width: 100%;
`;

export const Title = styled.h1`
  font-family: ${(props) => props.theme.fontFamily.primaryFont};
  font-size: 80px;
  font-weight: 500;
  margin: 0;
  padding: 40px 0 0 0;
  text-align: center;
  @media screen and (max-width: 1400px) {
    padding: 20px 0 0 0;
  }
  @media screen and (max-width: 1150px) {
    font-size: 60px;
    padding: 20px 0 0 0;
    line-height: 50px;
  }
`;

export const Subtitle = styled.h2`
  font-family: ${(props) => props.theme.fontFamily.secondaryFont};
  font-size: 50px;
  font-weight: 500;
  margin: 0;
  padding: 0 0 40px 0;
  @media screen and (max-width: 1150px) {
    font-size: 40px;
    padding: 0 0 20px 0;
  }
`;

export const Button = styled.button`
  position: absolute;
  display: flex;
  align-self: flex-start;
  border-radius: 50%;
  border: none;
  height: 60px;
  width: 60px;
  background-color: ${(props) => props.theme.colors.tertiaryUi};
  margin: 40px 40px 40px 40px;
  padding: 0;
  justify-content: center;
  @media screen and (max-width: 1400px) {
    position: static;
    align-self: center;
    margin: 20px 0 0 0;
  }
  @media screen and (max-width: 1150px) {
    position: static;
    align-self: center;
    margin: 20px 20px 0 20px;
  }
`;
