import React from "react";

const Home = ({ totalIncome, totalExpense, balance}) => {

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          height: "100vh",
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <div className="card" style={{ width: "18rem", marginBottom: "30px" }}>
          <div className="card-body">
            <h5 className="card-title">MY BALANCE</h5>
            <p className="card-text">Total Balance: $ {balance}</p>
          </div>
        </div>

        <div className="card" style={{ width: "18rem", marginBottom: "30px" }}>
          <div className="card-body">
            <h5 className="card-title">INCOME</h5>
            <p className="card-text">Total Income: $ {totalIncome}</p>
          </div>
        </div>

        <div className="card" style={{ width: "18rem", marginBottom: "30px" }}>
          <div className="card-body">
            <h5 className="card-title">EXPENSES</h5>
            <p className="card-text">Total Expenses: $ {totalExpense}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
