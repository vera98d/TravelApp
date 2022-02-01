import { useContext } from "react";
import { ModalContext } from "../../contexts/ModalContextProvider";
import StyledModal, { ModalOverlay, CloseButton } from "./style.js";
import closeButton from "./img/closeButton.svg";

function Modal() {
  const modalContext = useContext(ModalContext);
  return (
    <>
      <ModalOverlay
        onClick={() => {
          modalContext.setDisplayedComponent(null);
        }}
      />

      <StyledModal>
        <CloseButton
          src={closeButton}
          onClick={() => {
            modalContext.setDisplayedComponent(null);
          }}
        ></CloseButton>

        {modalContext.displayedComponent}
      </StyledModal>
    </>
  );
}

export default Modal;
