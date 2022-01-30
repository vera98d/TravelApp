import { render, screen, waitFor } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles";
import { Chat } from "./Chat";
import { messagesMock, myIdMock } from "./mocks";

describe("Chat", () => {
  test("is rendering expected elements", async () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Chat myId={myIdMock} />
      </ThemeProvider>
    );
    await screen.findAllByRole("listitem");
    expect(container).toMatchSnapshot();
  });

  test("is rendering all messages", async () => {
    render(
      <ThemeProvider theme={theme}>
        <Chat myId={myIdMock} />
      </ThemeProvider>
    );

    const listItems = await screen.findAllByRole("listitem");
    expect(listItems.length).toBe(messagesMock.length);
  });

  test("is rendering current user message on the right side", async () => {
    render(
      <ThemeProvider theme={theme}>
        <Chat myId={myIdMock} />
      </ThemeProvider>
    );

    await screen.findAllByRole("listitem");
    const myMessageText = messagesMock.find(
      (message) => message.authorId === myIdMock
    ).text;
    const yoursMessageText = messagesMock.find(
      (message) => message.authorId !== myIdMock
    ).text;
    const myMessageItem = screen.getByText(myMessageText);
    const yoursMessageItem = screen.getByText(yoursMessageText);

    expect(myMessageItem).toHaveStyle("align-self: flex-end;");
    expect(yoursMessageItem).toHaveStyle("align-self: flex-start;");
  });
});
