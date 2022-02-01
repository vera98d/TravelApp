import { Container, Title, Subtitle, Button } from "./styles";
import { ReactComponent as BackIcon } from "../../icons/back_icon.svg";
import { useNavigate } from "react-router-dom";

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

export const Header = (props) => {
  const title = props.title;
  const subtitle = props.subtitle;

  return (
    <Container>
      <BackButton isBackButtonVisible={props.isBackButtonVisible} />
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Container>
  );
};
