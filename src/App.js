import { Routes, Route, Navigate } from "react-router-dom";
import styled from "styled-components";
import Map from "./components/Map";
import { Header } from "./components/Header";
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
          element={
            <Container>
              <Header
                title="choose your destination and click"
                subtitle="to start your adventure"
                isBackButtonVisible={false}
              />
              <Map />
            </Container>
          }
        />
        <Route exact path="provinces/:provinceId" element={<ProvincePage />} />
        <Route path="*" element={<Navigate to="provinces" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
