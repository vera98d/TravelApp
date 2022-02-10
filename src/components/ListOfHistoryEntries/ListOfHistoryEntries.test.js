import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles";
import { ListOfHistoryEntries } from "./index";
import historyEntriesService from "../../services/HistoryEntriesService";
import { entriesMock } from "./mock";

let orginalGetAll;
beforeEach(() => {
  orginalGetAll = historyEntriesService.getAll;
  historyEntriesService.getAll = () => Promise.resolve(entriesMock);
});

afterEach(() => {
  historyEntriesService.getAll = orginalGetAll;
});

const entryTitle = {
  title: "Szlakiem krasnali",
  city: "Wroclaw",
};

describe("ListOfHistoryEntries", () => {
  test("matches snapshot", async () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <ListOfHistoryEntries props={entryTitle} />
      </ThemeProvider>
    );
    await screen.findAllByRole("listitem");
    expect(container).toMatchSnapshot();
  });

  test('A "Create new story" button is rendered', () => {
    render(
      <ThemeProvider theme={theme}>
        <ListOfHistoryEntries props={entryTitle} />
      </ThemeProvider>
    );

    const button = screen.getByText("Create new story");
    expect(button).toBeInTheDocument();
  });

  test("extracts the button DOM node", () => {
    render(
      <ThemeProvider theme={theme}>
        <ListOfHistoryEntries props={entryTitle} />
      </ThemeProvider>
    );

    const button = screen.getByRole("button");
    expect(button).not.toBeDisabled();
  });

  test('Header should show "History of entries"', () => {
    render(
      <ThemeProvider theme={theme}>
        <ListOfHistoryEntries props={entryTitle} />
      </ThemeProvider>
    );

    const header = screen.queryByText("History of entries");
    expect(header).toBeInTheDocument();
  });

  test("is rendering all entries in each province", async () => {
    render(
      <ThemeProvider theme={theme}>
        <ListOfHistoryEntries props={entryTitle} />
      </ThemeProvider>
    );

    const lists = await screen.findAllByRole("listitem");
    expect(lists.length).toBe(entriesMock.length);
  });
});
