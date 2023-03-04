import React from "react";

function Income() {

  return (
    <div>
      <section className="vh-100">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div
                className="card shadow-2-strong"
                style={{ borderRadius: "1rem" }}
              >
                <div className="card-body p-5 text-center">
                  <h3 className="mb-5">Add Expense</h3>

                  <hr className="my-4" />

                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="name">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      name="name"
                      //value={credentials.userN}
                      //onChange={(e) => getCredentials(e)}
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
                      //value={credentials.userN}
                      //onChange={(e) => getCredentials(e)}
                    />
                  </div>

                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="category">
                      Category
                    </label>
                    <select
                      class="form-select"
                      aria-label="Default select example"
                      name="category"
                    >
                      <option selected>Shopping</option>
                      <option>Education</option>
                      <option>General Expense</option>
                      <option>Travel</option>
                      <option>MISC</option>
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
                      //value={credentials.userN}
                      //onChange={(e) => getCredentials(e)}
                    />
                  </div>

                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="payment-mode">
                      Payment Mode
                    </label>
                    <select
                      class="form-select"
                      aria-label="Default select example"
                      name="payment-mode"
                    >
                      <option selected>Cash</option>
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
                    />
                  </div>

                  <button
                    className="btn btn-primary btn-lg btn-block"
                    type="submit"
                    style={{ marginBottom: "20px" }}
                    onClick={() => console.log("Hi")}
                  >
                    SAVE
                  </button>

                  <hr className="my-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Income;
