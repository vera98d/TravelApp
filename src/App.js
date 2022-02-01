import { Routes, Route, Navigate } from "react-router-dom";
import styled from "styled-components";
import ProvincePage from "./pages/ProvincePage";

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
        <Route exact path="provinces/:provinceId" element={<ProvincePage />} />
        <Route path="*" element={<Navigate to="provinces" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
