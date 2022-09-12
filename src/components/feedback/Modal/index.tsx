/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { IOpenModalProps, useModal } from "../../hooks/ModalProvider";

interface IModalProps {
  modalProps: IOpenModalProps;
}
const Modal: React.FC<IModalProps> = ({ modalProps }) => {
  const { closeModal } = useModal();

  return (
    <div className="modal active">
      <a href="#" className="modal-overlay" onClick={closeModal} />
      <div
        className="modal-container"
        style={{
          padding: 0,
          maxWidth: "60vw",
        }}>
        <div
          className="modal-header bg-gray "
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}>
          <p
            style={{
              margin: 0,
            }}>
            {modalProps.title}
          </p>
          <div className="modal-title"></div>
          <a
            href="#close"
            className="btn btn-clear float-right"
            onClick={closeModal}
          />
        </div>
        <div className="modal-body">{modalProps.elementChildren}</div>
      </div>
    </div>
  );
};

export default Modal;
