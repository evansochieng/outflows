import React from "react";
import AddExpense from "./AddExpense";

function Income( {handleSubmit, expenseDetails, setExpenseDetails} ) {

  return (
    <div>
      <AddExpense
        handleSubmit={handleSubmit}
        expenseDetails={expenseDetails}
        setExpenseDetails={setExpenseDetails}
      />
    </div>
  );
}

export default Income;
