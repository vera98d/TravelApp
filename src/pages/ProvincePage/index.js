import {
  Container,
  StyledChat,
  StyledListOfHistoryEntries,
  Wrapper,
} from "./styles";
import { myIdMock } from "../../components/Chat/mocks";
import { Header } from "../../components/Header";
import { useLocation } from "react-router-dom";
import authService from "../../services/authService.js";
import { useAuthState } from "react-firebase-hooks/auth";

const ProvincePage = () => {
  const [user, loading] = useAuthState(authService.getAuth());
  const location = useLocation();
  if (loading || !user) {
    return null;
  }
  return (
    <Container>
      <Header
        title={location.state.province}
        subtitle="read entries, create your story and chat with other travellers"
        isBackButtonVisible
      />
      <Wrapper>
        <StyledListOfHistoryEntries province={location.state.province} />
        <StyledChat myId={user.uid} province={location.state.province} />
      </Wrapper>
    </Container>
  );
};

export default ProvincePage;
