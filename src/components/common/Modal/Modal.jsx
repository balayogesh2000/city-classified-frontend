import React from "react";
import { Modal } from "react-bootstrap";

const ModalComp = ({
  show,
  setShow,
  onSave,
  title,
  cancel = "Cancel",
  save = "Save",
  children,
}) => {
  const handleClose = () => setShow(false);
  return (
    <Modal show={show} onHide={handleClose} animation={false}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      {/* <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          {cancel}
        </Button>
        <Button variant="primary" onClick={onSave}>
          {save}
        </Button>
      </Modal.Footer> */}
    </Modal>
  );
};

export default ModalComp;
