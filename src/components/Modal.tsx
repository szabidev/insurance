import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import "./Modal.css";

const Modal: FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content">
        <p></p>
        <NavLink
          className={"close-btn bg-primary"}
          to="login"
          onClick={onClose}
        >
          Go to Login
        </NavLink>
      </div>
    </div>
  );
};

export default Modal;
