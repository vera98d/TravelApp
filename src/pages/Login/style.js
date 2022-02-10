import styled from "styled-components";
import { PrimaryButton } from "../../styles";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin-top: 40px;
`;

export const Input = styled.input`
  display: flex;
  text-align: center;
  padding: 1em;
  margin-top: 15px;
  background-color: ${(props) => props.theme.colors.secondaryUi};
  font-family: ${(props) => props.theme.fontFamily.secondaryFont};
  font-size: 20px;
  border: 1px solid white;
  border-radius: 15px;
  width: 500px;

  &:focus {
    outline: none;
    box-shadow: 0px 0px 2px rgba(191, 125, 101, 0.77);
  }
`;

export const LoginButton = styled(PrimaryButton)`
  margin-top: 30px;
  font-size: 25px;
`;

export const DontHaveAccountText = styled.div`
  font-size: 20px;
  font-family: ${(props) => props.theme.fontFamily.secondaryFont};
  margin-top: 15px;
`;
