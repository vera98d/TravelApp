import { Container, Title1, Title2 } from "./styles";
import { useNavigate } from "react-router-dom";

export const Intro = () => {
  let navigate = useNavigate();
  return (
    <Container onClick={() => navigate("/team-jo-project-2/provinces")}>
      <Title1>LET'S</Title1>
      <Title2>TRAVEL</Title2>
    </Container>
  );
};
