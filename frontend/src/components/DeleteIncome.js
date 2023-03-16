import React from 'react';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function DeleteIncome({incomeDetails, handleIncomeDelete, incDeletePopup, setIncDeletePopup}) {
    const handleClose = () => setIncDeletePopup(false);

  return (
    <>
      <Modal show={incDeletePopup} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Income</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p style={{ color: "red" }}>
            Remove the income from the list of incomes. This action is permanent 
            and cannot be reversed!
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            CLOSE
          </Button>
          <Button
            variant="primary"
            onClick={() => handleIncomeDelete(incomeDetails)}
          >
            DELETE INCOME
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteIncome;