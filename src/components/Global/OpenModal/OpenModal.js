import React from "react";
import "./OpenModal.css";
import Modal from "@mui/material/Modal";
function OpenModal( {text, handleClickNo, handleClickYes, open, setOpen} ) {

  return (
    <Modal open={open}>
      <div className="modal">
        <div className="modal__wrapper">
          <div>{text}</div>
          <div className="modal__buttons">
            <button type="button" onClick={handleClickYes}>
              Tak
            </button>
            <button type="button" onClick={handleClickNo}>
              Nie
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default OpenModal;
