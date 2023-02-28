import React from 'react'

function Expenses() {
  return (
    <div>
      <div>
        <div
          class="card"
          style={{ width: "60rem", marginBottom: "30px", marginTop: "30px" }}
        >
          <div class="card-body">
            <div style={{ display: "inline-block", justifyContent: 'space-between' }}>
              <h5
                class="card-title"
                style={{ color: "#0d6efd", float: "left" }}
              >
                Expenses
              </h5>
              <button
                type="button"
                class="btn btn-outline-primary"
                style={{ float: "right" }}
              >
                NEW EXPENSE
              </button>
            </div>
            <p class="card-text">Total Expenses: $ {0}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expenses 