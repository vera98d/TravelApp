import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyle } from "./styles";
import { ModalContextProvider } from "./contexts/ModalContextProvider";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <ModalContextProvider>
          <App />
        </ModalContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
