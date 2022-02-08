import styled, { keyframes } from "styled-components";

export const Form = styled.form`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-top: 1.5em;

  @media only screen and (orientation: landscape) and (max-width: 750px) {
    margin-top: 0.4em;
  }
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  padding: 1em;
  margin-top: 1em;
  border: 0px solid white;
  border-radius: 15px;
  font-family: ${(props) => props.theme.fontFamily.secondaryFont};

  &:focus {
    outline: none;
    box-shadow: 0px 0px 2px rgba(191, 125, 101, 0.77);
  }

  @media only screen and (orientation: landscape) and (max-width: 750px) {
    margin-top: 0.7em;
    padding: 0.8em;
  }

  @media only screen and (orientation: landscape) and (max-height: 350px) {
    margin-top: 0.4em;
    padding: 0.5em;
  }
`;

export const TextArea = styled.textarea`
  display: block;
  width: 100%;
  height: 25em;
  padding: 1em;
  margin-top: 1.5em;
  border: 0px solid white;
  border-radius: 15px;
  resize: none;
  flex-grow: 2;
  font-family: ${(props) => props.theme.fontFamily.secondaryFont};

  &:focus {
    outline: none;
    box-shadow: 0px 0px 2px rgba(191, 125, 101, 0.77);
  }

  @media only screen and (orientation: landscape) and (max-width: 750px) {
    margin-top: 0.7em;
    padding: 0.8em;
  }

  @media only screen and (orientation: landscape) and (max-height: 350px) {
    margin-top: 0.4em;
    padding: 0.5em;
  }
`;

export const ButtonGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 1.5em;

  @media only screen and (orientation: landscape) and (max-width: 750px) {
    margin-top: 0.7em;
  }

  @media only screen and (orientation: landscape) and (max-height: 350px) {
    margin-top: 0.4em;
  }
`;

export const ErrorMessage = styled.p`
  color: #c23e3e;
  align-self: flex-start;
  margin: 0.5em 0 0 1em;
`;

export const AddImageButton = styled.img`
  width: 40px;
  height: 40px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  @media only screen and (orientation: landscape) and (max-width: 750px) {
    width: 30px;
    height: 30px;
    top: 0.4em;
    right: 1.5em;
  }
`;

export const FileInput = styled.input`
  display: none;
`;

export const ImagePreview = styled.img`
  max-width: 60px;
  max-height: 60px;
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);

  border-top: 2px solid #dae5e5;
  border-right: 2px solid #dae5e5;
  border-bottom: 2px solid #b1e0d9;
  border-left: 4px solid #92d6ca;
  background: transparent;
  width: 130px;
  height: 130px;
  border-radius: 50%;
`;

const appear = keyframes`
  from {
    opacity:0;
  }
  to {
    opacity:100%;
  }
`;

export const FlexColContainer = styled.div`
  width: ${(props) => props.width};
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: ${(props) => props.align};
  justify-content: center;
  gap: ${(props) => props.gap};
  animation: ${appear} 0.8s;
`;

export const FlexRowContainer = styled(FlexColContainer)`
  flex-direction: row;
  justify-content: space-around;
  gap: 4em;
`;

export const UploadedImg = styled.img`
  width: 25%;
  max-height: 100%;
`;

export const H1 = styled.h1`
  font-family: ${(props) => props.theme.fontFamily.secondaryFont};
  font-size: 2.8rem;
  color: ${(props) => props.theme.colors.primaryUi};
  text-align: left;
  line-height: 130%;
`;

export const Span = styled.span`
  font-family: ${(props) => props.theme.fontFamily.secondaryFont};
  font-size: 2.8rem;
  color: #b1e0d9;
`;
