import styled from "styled-components";
import { scrollbarStyles } from "../../styles";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  height: 700px;
  width: 30vw;
  max-height: 100vh;
  border-radius: 15px;
`;

export const Header = styled.h3`
  font-size: 20px;
  font-weight: 500;
  font-family: ${(props) => props.theme.fontFamily.secondaryFont};
  text-align: center;
  background-color: ${(props) => props.theme.colors.primaryUi};
  border-radius: 15px;
  padding: 15px;
  margin-bottom: 20px;
`;

export const EntriesList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-grow: 1;
  padding: 0%;
  overflow: auto;
  ${scrollbarStyles}
  &::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.colors.fourthUi};
  }
  &::-webkit-scrollbar-track {
    background: ${(props) => props.theme.colors.thirdUi};
  }
`;

export const Entry = styled.li`
  list-style: none;
  background-color: ${(props) => props.theme.colors.secondaryUi};
  font-family: ${(props) => props.theme.fontFamily.secondaryFont};
  font-style: italic;
  width: 80%;
  padding: 10px;
  margin: 5px 0;
  border-radius: 15px;
  cursor: pointer;

  &:hover {
    border: 2px solid ${(props) => props.theme.colors.primaryUi};
    box-shadow: 0 2px 5px gray;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.primaryUi};
  color: ${(props) => props.theme.colors.white};
  font-family: ${(props) => props.theme.fontFamily.secondaryFont};
  font-size: 15px;
  height: 60px;
  width: 40%;
  border-radius: 15px;
  border: none;
  cursor: pointer;
`;
