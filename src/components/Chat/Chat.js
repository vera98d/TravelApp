import { useEffect, useState } from "react";
import { ReactComponent as SendIcon } from "../../icons/send_icon.svg";
import {
  Button,
  Container,
  Footer,
  Header,
  Input,
  Message,
  MessagesList,
} from "./styles";
import chatService from "../../services/ChatService";

export const Chat = (props) => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    chatService.getAll(props.province).then((data) => {
      setMessages(data);
    });
  }, [props.province]);

  useEffect(() => {
    return chatService.onChange(props.province, (newMessage) =>
      setMessages(messages.concat(newMessage))
    );
  }, [props.province, messages]);

  return (
    <Container className={props.className}>
      <Header>Chat with other travellers</Header>
      <MessagesList>
        {messages.map((message) => {
          return (
            <Message key={message.id} isOwn={message.authorId === props.myId}>
              {message.message}
            </Message>
          );
        })}
      </MessagesList>
      <Footer>
        <Input
          value={message}
          placeholder="Please enter your message here..."
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button
          type="button"
          disabled={!message}
          onClick={() => {
            chatService.insert(props.province, message, props.myId);
            setMessage("");
          }}
        >
          <SendIcon />
        </Button>
      </Footer>
    </Container>
  );
};
