import { Button, Modal } from "react-bootstrap";
import React from "react";

const PopUp = ({ displayPopUp, setDisplayPopUp, title, body }) => {
  return (
    <Modal
      show={displayPopUp}
      onHide={() => setDisplayPopUp(false)}
      style={{ fontFamily: "Signika" }}
    >
      <Modal.Header closeButton style={{ textAlign: "center" }}>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>

      <Modal.Body>{body}</Modal.Body>

      <Modal.Footer>
        <Button variant="dark" onClick={() => setDisplayPopUp(false)}>
          <span className="text-light">Close</span>
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PopUp;
