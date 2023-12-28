import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ApplicatonForm from "./ApplicationForm";

const ModalComponent = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Enroll course
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Enroll Now !</Modal.Title>
        </Modal.Header>
        <Modal.Body><ApplicatonForm /></Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={onSubmit} type="submit">
           Submit
          </Button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
};

export default ModalComponent;
