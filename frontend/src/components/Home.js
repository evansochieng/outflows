import React, { useState } from 'react'

const Home = () => {

  //define variable for balance
  const [balance, setBalance] = useState(0);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

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
        <div class="card" style={{ width: "18rem", marginBottom: "30px" }}>
          <div class="card-body">
            <h5 class="card-title">MY BALANCE</h5>
            <p class="card-text">Total Balance: $ {balance}</p>
          </div>
        </div>

        <div class="card" style={{ width: "18rem", marginBottom: "30px" }}>
          <div class="card-body">
            <h5 class="card-title">INCOME</h5>
            <p class="card-text">Total Income: $ {income}</p>
          </div>
        </div>

        <div class="card" style={{ width: "18rem", marginBottom: "30px" }}>
          <div class="card-body">
            <h5 class="card-title">EXPENSES</h5>
            <p class="card-text">Total Expenses: $ {expense}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home