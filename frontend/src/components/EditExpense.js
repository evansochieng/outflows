import { React } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const EditExpense = ({
  handleUpdate,
  expEditPopup,
  setExpEditPopup,
  expenseDetails,
  setExpenseDetails
}) => {

  // define function to handle change in inputs
  // set the values in inputs as values of the expense details
  const handleChange = (e) => {
    setExpenseDetails({
      ...expenseDetails,
      [e.target.name]: e.target.value,
    });
  };

  // function to close modal popup
  const handleClose = () => {
    setExpEditPopup(false);
    setExpenseDetails({
      name: "",
      date: "",
      category: "",
      description: "",
      payment: "",
      value: "",
    });
  }

  return (
    <>
      <Modal
        show={expEditPopup}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Update Expense</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <form>
              {/* expense details */}
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  name="name"
                  value={expenseDetails.name}
                  onChange={(e) => handleChange(e)}
                />
              </div>

              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="date">
                  Date
                </label>
                <input
                  type="date"
                  className="form-control form-control-lg"
                  name="date"
                  value={expenseDetails.date}
                  onChange={(e) => handleChange(e)}
                />
              </div>

              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="category">
                  Category
                </label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  name="category"
                  value={expenseDetails.category}
                  onChange={(e) => handleChange(e)}
                >
                  <option defaultValue>Shopping</option>
                  <option>Education</option>
                  <option>General Expense</option>
                  <option>Travel</option>
                  <option>Misc</option>
                </select>
              </div>

              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="description">
                  Description
                </label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  name="description"
                  value={expenseDetails.description}
                  onChange={(e) => handleChange(e)}
                />
              </div>

              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="payment-mode">
                  Payment Mode
                </label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  name="payment-mode"
                  value={expenseDetails.payment}
                  onChange={(e) => handleChange(e)}
                >
                  <option defaultValue>Cash</option>
                  <option>Mpesa</option>
                  <option>Card</option>
                  <option>Cheque</option>
                </select>
              </div>

              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="value">
                  Expense Value
                </label>
                <input
                  className="form-control form-control-lg"
                  type="number"
                  name="value"
                  min="0"
                  step="10"
                  value={expenseDetails.value}
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            CLOSE
          </Button>
          <Button
            variant="primary"
            type="submit"
            onClick={(e, expenseDetails) => handleUpdate(e, expenseDetails)}
          >
            SAVE CHANGES
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditExpense;
