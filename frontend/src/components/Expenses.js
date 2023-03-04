import React from "react";
import DisplayExpense from "./DisplayExpense";

function Expenses({ expenses }) {
  return (
    <div>
      {/* <div>
        <div
          className="card"
          style={{ width: "60rem", marginBottom: "30px", marginTop: "30px" }}
        >
          <div className="card-body">
            <div
              style={{
                display: "inline-block",
                justifyContent: "space-between",
              }}
            >
              <h5
                className="card-title"
                style={{ color: "#0d6efd", float: "left" }}
              >
                Expenses
              </h5>
              <button
                type="button"
                className="btn btn-outline-primary"
                style={{ float: "right" }}
              >
                NEW EXPENSE
              </button>
            </div>
            <p className="card-text">Total Expenses: $ {0}</p>
          </div>
        </div>
      </div> */}
      <div class="container-lg">
        <div class="table-responsive">
          <div class="table-wrapper">
            <div class="table-title">
              <div class="row">
                <div class="col-sm-8">
                  <h2>
                    <b>Expenses</b>
                  </h2>
                </div>
                <div class="col-sm-4">
                  <button type="button" class="btn btn-info add-new">
                    <i class="fa fa-plus"></i> Add New
                  </button>
                </div>
              </div>
            </div>
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Date</th>
                  <th>Category</th>
                  <th>Description</th>
                  <th>Payment Mode</th>
                  <th>Value</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {expenses.map( (expense) => <DisplayExpense key={expense.id} expense={expense} /> )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expenses;
