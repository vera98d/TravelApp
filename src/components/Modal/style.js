import styled from "styled-components";

const StyledModal = styled.div`
  width: 90vw;
  height: 85vh;
  max-width: 1100px;
  background: rgba(244, 233, 229, 0.9);
  border-radius: 30px;
  padding: 2em 3em;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  animation: slideIn 0.8s both ease-in-out;

  @keyframes slideIn {
    0% {
      transform: translate(-150%, -50%);
      opacity: 0;
    }
    50% {
      opacity: 100%;
    }
    100% {
      transform: translate(-50%, -50%);
    }
  }

  @media only screen and (orientation: landscape) {
    max-height: 800px;
  }

  @media only screen and (orientation: landscape) and (max-width: 900px) {
    max-height: auto;
    max-width: auto;
    width: 95vw;
    height: 95vh;
    padding: 0.8em 1em;
  }

  @media only screen and (orientation: portrait) {
    max-height: 600px;
    max-width: auto;
    width: 95vw;
    padding: 1.2em 1.5em;
  }
`;

export const ModalOverlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(255, 255, 255, 0.66);
  z-index: 2;
`;

export const CloseButton = styled.img`
  width: 40px;
  height: 40px;
  position: absolute;
  top: 1em;
  right: 2.5em;
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

  @media only screen and (orientation: portrait) {
    top: 0.4em;
    right: 1.5em;
  }
`;
export default StyledModal;
