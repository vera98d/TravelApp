import {
  Container,
  StyledChat,
  StyledListOfHistoryEntries,
  Wrapper,
} from "./styles";
import { myIdMock } from "../../components/Chat/mocks";
import { Header } from "../../components/Header";
import { useLocation } from "react-router-dom";

const ProvincePage = () => {
  const location = useLocation();
  return (
    <Container>
      <Header
        title={location.state.province}
        subtitle="read entries, create your story and chat with other travellers"
        isBackButtonVisible
      />
      <Wrapper>
        <StyledListOfHistoryEntries province={location.state.province} />
        <StyledChat myId={myIdMock} province={location.state.province} />
      </Wrapper>
    </Container>
  );
};

export default ProvincePage;
