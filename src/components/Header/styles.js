import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.headerBackground};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 15px;
  padding-right: 15px;
  width: 100%;
`;

export const Title = styled.h1`
  font-family: ${(props) => props.theme.fontFamily.primaryFont};
  font-size: 80px;
  font-weight: 500;
  margin-left: 80px;
  margin-right: 80px;
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
  @media screen and (max-width: 560px) {
    width: 350px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const Subtitle = styled.h2`
  font-family: ${(props) => props.theme.fontFamily.secondaryFont};
  font-size: 50px;
  font-weight: 500;
  margin: 0;
  padding: 0 0 40px 0;
  text-align: center;
  @media screen and (max-width: 1150px) {
    font-size: 30px;
    padding: 0 0 20px 0;
  }
`;

export const Button = styled.button`
  position: absolute;
  display: flex;
  align-self: flex-start;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: none;
  height: 50px;
  width: 50px;
  background-color: ${(props) => props.theme.colors.tertiaryUi};
  top: 20px;
  left: 10px;
  padding: 0;
  cursor: pointer;
  svg {
    fill: white;
    width: 35px;
    height: 35px;
  }
  @media screen and (max-width: 1150px) {
    height: 40px;
    width: 40px;
    margin: 10px;
    top: 10px;
    svg {
      height: 25px;
      width: 25px;
    }
  }
`;

export const RightButton = styled(Button)`
  left: initial;
  right: 10px;
`;
