import React from "react";
import "./Modal.css";

const Modal = (props) => {
  if (!props.show) return null;

  return (
    <div className="modal" onClick={props.onClose}>
      <div className="modal-content" onClick={(elem) => elem.stopPropagation()}>
        <div className="modal-header">
          <h4 className="modal-title">{props.name.common}</h4>
        </div>
        <div className="modal-body">
          <div>
            <h2>Name: {props.name.common}</h2>
            <h2>Capital: {props.capital}</h2>
            <h2>Population: {props.population}</h2>
            <img src={props.flags.svg} alt="" width="250" height="200" />
          </div>
        </div>
        <div className="modal-footer">
          <button onClick={props.onClose} className="modal-button">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
