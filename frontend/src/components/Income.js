import React from "react";
import AddIncome from "./AddIncome";
import DisplayIncome from "./DisplayIncome";

function Income( {incomes, showIncome, setShowIncome, incEditPopup, setIncEditPopup, incDeletePopup, setIncDeletePopup, handleIncomeSubmit, incomeDetails, setIncomeDetails} ) {

  return (
    <div>
      <div className="container-lg">
        <div className="table-responsive">
          <div className="table-wrapper">
            <div className="table-title">
              <div className="row">
                <div className="col-sm-8">
                  <h2>
                    <b>Incomes</b>
                  </h2>
                </div>
                <div className="col-sm-4">
                  <button
                    type="button"
                    className="btn btn-info add-new"
                    onClick={() => setShowIncome(true)}
                  >
                    <i className="fa fa-plus"></i> Add New
                  </button>
                  <AddIncome
                    handleIncomeSubmit={handleIncomeSubmit}
                    incomeDetails={incomeDetails}
                    setIncomeDetails={setIncomeDetails}
                    showIncome={showIncome}
                    setShowIncome={setShowIncome}
                  />
                </div>
              </div>
            </div>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Date</th>
                  <th>Source</th>
                  <th>Description</th>
                  <th>Amount</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {incomes.map((income) => (
                  <DisplayIncome
                    key={income.id}
                    income={income}
                    incomeDetails={incomeDetails}
                    setIncomeDetails={setIncomeDetails}
                    incEditPopup={incEditPopup}
                    setIncEditPopup={setIncEditPopup}
                    // handleUpdate={handleUpdate}
                    // handleDelete={handleDelete}
                    incDeletePopup={incDeletePopup}
                    setIncDeletePopup={setIncDeletePopup}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Income;
