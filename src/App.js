import { Routes, Route, Navigate } from "react-router-dom";
import styled from "styled-components";
import { ListOfHistoryEntries } from "./components/ListOfHistoryEntries/index";
import { Chat } from "./components/Chat/Chat";
import { myIdMock } from "./components/Chat/mocks";

const Container = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  height: 100vh;
`;

function App() {
  return (
    <Routes>
      <Route path="/team-jo-project-2">
        <Route index element={<Container>Intro</Container>} />
        <Route
          exact
          path="provinces"
          element={<Container>Map of provinces</Container>}
        />
        <Route
          exact
          path="provinces/:provinceId"
          element={
            <Container>
              <ListOfHistoryEntries /> <Chat myId={myIdMock} />
            </Container>
          }
        />
        <Route path="*" element={<Navigate to="provinces" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
