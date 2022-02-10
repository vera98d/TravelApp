import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles";
import AddHistoryEntry from "../AddHistoryEntry";

test("is rendering expected elements", async () => {
  const { container } = render(
    <ThemeProvider theme={theme}>
      <AddHistoryEntry />
    </ThemeProvider>
  );

  expect(container).toMatchSnapshot();
});

test("renders all elements", () => {
  render(
    <ThemeProvider theme={theme}>
      <AddHistoryEntry />
    </ThemeProvider>
  );

  const modalTitle = screen.getByText(/New story/i);
  const titleInput = screen.getByPlaceholderText(/Type title of your journey/i);
  const cityInput = screen.getByPlaceholderText(/Type city of your journey/i);
  const descriptionInput = screen.getByPlaceholderText(/Describe your story/i);
  const fileInput = screen.getByRole("img", {
    src: "./img/addImageButton.svg",
  });
  const submitButton = screen.getByRole("button", { type: "submit" });

  expect(modalTitle).toBeInTheDocument();
  expect(titleInput).toBeInTheDocument();
  expect(cityInput).toBeInTheDocument();
  expect(descriptionInput).toBeInTheDocument();
  expect(fileInput).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();
});

test("validates form properly", async () => {
  render(
    <ThemeProvider theme={theme}>
      <AddHistoryEntry />
    </ThemeProvider>
  );
  const submitButton = screen.getByRole("button", { type: "submit" });
  const titleInput = screen.getByPlaceholderText(/Type title of your journey/i);
  const cityInput = screen.getByPlaceholderText(/Type city of your journey/i);
  const descriptionInput = screen.getByPlaceholderText(/Describe your story/i);

  userEvent.click(submitButton);

  await waitFor(() => {
    expect(screen.getByText("Title is required.")).toBeInTheDocument();
    expect(screen.getByText("City is required.")).toBeInTheDocument();
    expect(screen.getByText("Description is required.")).toBeInTheDocument();
  });

  userEvent.type(titleInput, "Amazing adventure");
  userEvent.type(cityInput, "Gdańsk");
  userEvent.type(
    descriptionInput,
    "It was a wonderful trip a had with my best friends"
  );
  userEvent.click(submitButton);

  await waitFor(() => {
    expect(screen.queryByText("Title is required.")).not.toBeInTheDocument();
    expect(screen.queryByText("City is required.")).not.toBeInTheDocument();
    expect(
      screen.queryByText("Description is required.")
    ).not.toBeInTheDocument();
  });
});
