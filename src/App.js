import { Routes, Route, Navigate } from "react-router-dom";
import styled from "styled-components";
import { Intro } from "./components/Intro";
import Map from "./components/Map";
import { Header } from "./components/Header";
import ProvincePage from "./pages/ProvincePage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { Auth } from "./components/Auth";

const Container = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  height: 100vh;
`;

function App() {
  return (
    <Routes>
      <Route path="/team-jo-project-2">
        <Route
          index
          element={
            <Container>
              <Intro />
            </Container>
          }
        />
        <Route
          path="login"
          element={
            <Auth>
              <Container>
                <Login />
              </Container>
            </Auth>
          }
        />
        <Route
          path="register"
          element={
            <Auth>
              <Container>
                <Register />
              </Container>
            </Auth>
          }
        />
        <Route
          exact
          path="provinces"
          element={
            <Auth restricted>
              <Container>
                <Header
                  title="choose your destination and click"
                  subtitle="to start your adventure"
                  isBackButtonVisible={false}
                />
                <Map />
              </Container>
            </Auth>
          }
        />
        <Route
          exact
          path="provinces/:provinceId"
          element={
            <Auth restricted>
              <ProvincePage />
            </Auth>
          }
        />
        <Route path="*" element={<Navigate to="provinces" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
