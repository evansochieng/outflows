import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function DeleteExpense({expenseDetails, handleDelete, expDeletePopup, setExpDeletePopup}) {

  const handleClose = () => setExpDeletePopup(false);

  return (
    <>
      <Modal show={expDeletePopup} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Expense</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p style={{color: 'red'}}>
            Remove this expense from the list of expenses. Remember this is a
            permanent action!
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            CLOSE
          </Button>
          <Button variant="primary" onClick={() => handleDelete(expenseDetails)}>
            DELETE EXPENSE
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteExpense;
