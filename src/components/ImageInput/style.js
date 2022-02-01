import styled from "styled-components";

export const FileInput = styled.input`
  display: none;
`;

export const ImagePreview = styled.img`
  max-width: 60px;
  max-height: 60px;
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
