import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import classes from "./DeleteIcon.module.css";
import trashImg from "../../assets/trash-fill.svg";

const DeleteIcon = ({ onClick, disabled, editable }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    if (disabled) {
      return;
    }
    setShow(true);
  };
  const deleteHandler = () => {
    onClick();
    setShow(false);
  };
  return (
    <>
      {editable === "false" ? (
        <img
          style={{ opacity: "0.5", cursor: "not-allowed" }}
          src={trashImg}
          alt="trash icon"
          className={disabled ? classes.disabled : classes.active}
        />
      ) : (
        <img
          src={trashImg}
          alt="trash icon"
          className={disabled ? classes.disabled : classes.active}
          onClick={handleShow}
        />
      )}
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete?</Modal.Body>
        <Modal.Footer>
          <Button variant="outline-danger" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={deleteHandler}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DeleteIcon;
