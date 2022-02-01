import { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: ${(props) => props.theme.fontFamily.secondaryFont} 
  }
`;

export const theme = {
  colors: {
    white: "#fff",
    primaryUi: "#BF7D65C4",
    secondaryUi: "#BF7D652B",
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
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.colors.primaryUi};
    border-radius: 5px;
  }
  &::-webkit-scrollbar-track {
    background: ${(props) => props.theme.colors.white};
    border-radius: 5px;
  }
`;
