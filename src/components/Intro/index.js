import { Container, Title1, Title2, StartButton, Span1 } from "./styles";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import authService from "../../services/authService.js";
import { useAuthState } from "react-firebase-hooks/auth";

export const Intro = () => {
  const timeoutRef = useRef();
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

  const redirect = () => {
    timeoutRef.current = setTimeout(() => {
      if (user) {
        navigate("/team-jo-project-2/provinces");
      } else {
        navigate("login");
      }
    }, 15000);
  };

  useEffect(() => {
    redirect();
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <Container>
      <Title1>LET'S</Title1>
      <Title2>TRAVEL</Title2>
      <StartButton onClick={() => handleClick()}>
        Click to start!
        <Span1>{">>"}</Span1>
      </StartButton>
    </Container>
  );
};
