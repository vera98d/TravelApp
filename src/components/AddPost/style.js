import styled from "styled-components";

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
