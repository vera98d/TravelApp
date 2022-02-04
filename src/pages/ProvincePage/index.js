import {
  Container,
  StyledChat,
  StyledListOfHistoryEntries,
  Wrapper,
} from "./styles";
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
        <StyledListOfHistoryEntries /> <StyledChat myId={myIdMock} />
      </Wrapper>
    </Container>
  );
};

export default ProvincePage;
