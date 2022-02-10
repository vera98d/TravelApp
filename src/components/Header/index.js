import { Container, Title, Subtitle, Button, RightButton } from "./styles";
import { ReactComponent as BackIcon } from "../../icons/back_icon.svg";
import { ReactComponent as LogoutIcon } from "../../icons/logout_icon.svg";
import authService from "../../services/authService.js";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";

const BackButton = (props) => {
  const navigate = useNavigate();
  if (!props.isBackButtonVisible) {
    return null;
  }
  return (
    <Button onClick={() => navigate(-1)}>
      <BackIcon />
    </Button>
  );
};

const LogoutButton = (props) => {
  const navigate = useNavigate();
  const [user, loading] = useAuthState(authService.getAuth());
  if (!user || loading || props.isLogoutButtonVisible) {
    return null;
  }
  const handleButtonClick = () => {
    signOut(authService.getAuth()).then(() => {
      navigate("/team-jo-project-2");
    });
  };
  return (
    <RightButton onClick={handleButtonClick}>
      <LogoutIcon />
    </RightButton>
  );
};

export const Header = (props) => {
  const title = props.title;
  const subtitle = props.subtitle;

  return (
    <Container>
      <BackButton isBackButtonVisible={props.isBackButtonVisible} />
      <LogoutButton isLogoutButtonVisible={props.isLogoutButtonVisible} />
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Container>
  );
};
