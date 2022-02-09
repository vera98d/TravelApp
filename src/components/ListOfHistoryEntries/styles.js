import styled from "styled-components";
import { PrimaryButton, scrollbarStyles } from "../../styles";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  height: 600px;
  max-height: 100%;
  border-radius: 12px;
`;

export const Header = styled.h3`
  font-size: 30px;
  font-weight: 1000;
  font-family: ${(props) => props.theme.fontFamily.secondaryFont};
  text-align: center;
  background-color: ${(props) => props.theme.colors.primaryUi};
  border-radius: 12px;
  padding: 15px;
  margin-bottom: 20px;
`;

export const EntriesList = styled.ul.attrs((props) => ({
  width: "20px",
  trackColor: props.theme.colors.thirdUi,
  thumbColor: props.theme.colors.fourthUi,
}))`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-grow: 1;
  padding: 0%;
  overflow: auto;
  ${scrollbarStyles}
`;

export const Entry = styled.li`
  list-style: none;
  background-color: ${(props) => props.theme.colors.secondaryUi};
  font-family: ${(props) => props.theme.fontFamily.secondaryFont};
  font-size: 18px;
  font-style: italic;
  width: 90%;
  padding: 10px;
  margin: 5px 0;
  border: 2px solid transparent;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    border: 2px solid ${(props) => props.theme.colors.primaryUi};
    box-shadow: 0 2px 5px gray;
  }
`;
export const Button = styled(PrimaryButton)`
  align-self: flex-start;
  margin-top: 30px;
`;
