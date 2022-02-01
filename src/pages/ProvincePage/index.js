import { Container, WrapContainer, Wrapper } from "./styles";
import { ListOfHistoryEntries } from "../../components/ListOfHistoryEntries";
import { Chat } from "../../components/Chat/Chat";
import { myIdMock } from "../../components/Chat/mocks";
import { Header } from "../../components/Header";
import { useParams } from "react-router-dom";

const ProvincePage = () => {
  const params = useParams();
  return (
    <Container>
      <Header
        title={params.provinceId} //TODO: change to province name from server
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
