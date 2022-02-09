import { render } from "@testing-library/react";
import { HistoryEntry } from "./index.js";
import image from "../../../public/unitTest.jpg";
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles";

const testProps = {
  title: `Wroclaw`,
  city: `Wroclaw`,
  image: image,
  description: `Our City`,
};

it("matches snapshot", () => {
  const { asFragment } = render(
    <ThemeProvider theme={theme}>
      <HistoryEntry props={testProps} />
    </ThemeProvider>
  );

  expect(asFragment).toMatchSnapshot();
});
