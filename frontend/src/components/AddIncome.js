import React from 'react';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const AddIncome = ({
  handleIncomeSubmit,
  incomeDetails,
  setIncomeDetails,
  showIncome,
  setShowIncome,
}) => {
  // define function to handle change in inputs
  // set the values in inputs as values of the income details
  const handleChange = (e) => {
    setIncomeDetails({
      ...incomeDetails,
      [e.target.name]: e.target.value,
    });
  };

  // function to close modal popup
  const handleClose = () => setShowIncome(false);

  return (
    <>
      <Modal
        show={showIncome}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add New Income</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <form>
              {/* income details */}
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  name="name"
                  value={incomeDetails.name}
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
                  value={incomeDetails.date}
                  onChange={(e) => handleChange(e)}
                />
              </div>

              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="source">
                  Source
                </label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  name="source"
                  value={incomeDetails.source}
                  onChange={(e) => handleChange(e)}
                >
                  <option defaultValue>Online Writing</option>
                  <option>Salary</option>
                  <option>Business</option>
                  <option>Investments</option>
                  <option>Goodwill</option>
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
                  value={incomeDetails.description}
                  onChange={(e) => handleChange(e)}
                />
              </div>

              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="amount">
                  Income Amount
                </label>
                <input
                  className="form-control form-control-lg"
                  type="number"
                  name="amount"
                  min="0"
                  step="10"
                  value={incomeDetails.amount}
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
            onClick={(e) => {
              handleIncomeSubmit(e);
              setShowIncome(false);
            }}
          >
            SAVE
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddIncome;