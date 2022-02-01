import { Container, WrapContainer, Wrapper } from "./styles";
import { ListOfHistoryEntries } from "../../components/ListOfHistoryEntries";
import { Chat } from "../../components/Chat/Chat";
import { myIdMock } from "../../components/Chat/mocks";
import { Header } from "../../components/Header";
import { useParams, useLocation } from "react-router-dom";

const ProvincePage = () => {
  const params = useParams();
  const location = useLocation();
  return (
    <Container>
      <Header
        title={location.state.province}
        subtitle="read entries, create your story and chat with antother travellers"
        isBackButtonVisible
      />
      <Wrapper>
        <ListOfHistoryEntries /> <Chat myId={myIdMock} />
      </Wrapper>
    </Container>
  );
};

export default ProvincePage;
