import { Container, Title1, Title2 } from "./styles";
import { useNavigate } from "react-router-dom";
import authService from "../../services/authService.js";
import { useAuthState } from "react-firebase-hooks/auth";

export const Intro = () => {
  let navigate = useNavigate();

  const [user, loading] = useAuthState(authService.getAuth());
  const handleClick = () => {
    if (loading) {
      return;
    }
    if (user) {
      navigate("/team-jo-project-2/provinces");
    } else {
      navigate("login");
    }
  };
  return (
    <Container onClick={handleClick}>
      <Title1>LET'S</Title1>
      <Title2>TRAVEL</Title2>
    </Container>
  );
};
