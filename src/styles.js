import styled, { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  @media only screen and (orientation: landscape) and (max-width:750px) {
      padding: 0.5em 1.5em;
    }
  }
`;

export const theme = {
  colors: {
    white: "#fff",
    headerBackground: "#DAE5E5",
    primaryUi: "#BF7D65C4",
    secondaryUi: "#BF7D652B",
    tertiaryUi: "#C4C4C4",
    thirdUi: "rgba(218, 229, 229, 0.26)",
    fourthUi: "#DAE5E5",
  },

  fontFamily: {
    primaryFont: "Bebas Neue, cursive",
    secondaryFont: "Crimson Pro, serif",
  },
};

export const scrollbarStyles = css`
  &::-webkit-scrollbar {
    width: ${(props) => props.width || "10px"};
  }
  &::-webkit-scrollbar-thumb {
    background: ${(props) => props.thumbColor || props.theme.colors.primaryUi};
    border-radius: calc(${(props) => props.width || "10px"} / 2);
  }
  &::-webkit-scrollbar-track {
    background: ${(props) => props.trackColor || props.theme.colors.white};
    border-radius: calc(${(props) => props.width || "10px"} / 2);
  }
`;

export const PrimaryButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.primaryUi};
  color: ${(props) => props.theme.colors.white};
  font-family: ${(props) => props.theme.fontFamily.secondaryFont};
  font-size: 18px;
  padding: 0.75em 2em;
  border-radius: 10px;
  border: none;
  cursor: pointer;

  &:hover {
    background: #df9b89;
  }
`;
