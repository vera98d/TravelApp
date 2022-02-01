import { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  button {
    display:block;
    background: rgba(191, 125, 101, 0.77);
    color: white;
    padding: 0.75em 2em;
    border-radius: 10px;
    border:none;
    cursor: pointer;

    &:hover{
        background: #DF9B89;
    }

    @media only screen and (orientation: landscape) and (max-width:750px) {
      padding: 0.5em 1.5em;
    }
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
