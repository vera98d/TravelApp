import { useEffect, useState } from "react";
import { ReactComponent as SendIcon } from "../../icons/send_icon.svg";
import { messagesMock } from "./mocks";
import {
  Button,
  Container,
  Footer,
  Header,
  Input,
  Message,
  MessagesList,
} from "./styles";

// TODO: use fetch instead this method
const getMessages = async () => messagesMock;

export const Chat = (props) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    getMessages().then((data) => {
      setMessages(data);
    });
  }, []);

  return (
    <Container>
      <Header>Chat with another travellers</Header>
      <MessagesList>
        {messages.map((message) => {
          return (
            <Message key={message.id} isOwn={message.authorId === props.myId}>
              {message.text}
            </Message>
          );
        })}
      </MessagesList>
      <Footer>
        <Input />
        <Button type="button">
          <SendIcon />
        </Button>
      </Footer>
    </Container>
  );
};
