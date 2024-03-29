import React from "react";
import DeleteExpense from "./DeleteExpense";
import EditExpense from "./EditExpense";

function DisplayExpense({ expense, expenseDetails, setExpenseDetails, expEditPopup, setExpEditPopup, handleUpdate, handleDelete, expDeletePopup, setExpDeletePopup }) {
  // define a function to handleEditClick and set details to clicked expense
  const handleEditClick = () => {
    setExpEditPopup(true);
    setExpenseDetails({ ...expenseDetails, ...expense });
  };

  // define a function to handleEditClick and set details to clicked expense
  const handleDeleteClick = () => {
    setExpDeletePopup(true);
    setExpenseDetails({ ...expenseDetails, ...expense });
  };

  return (
    <tr>
      <td>{expense.name}</td>
      <td>{expense.date}</td>
      <td>{expense.category}</td>
      <td>{expense.description}</td>
      <td>{expense.payment}</td>
      <td>{expense.value}</td>
      <td>
        <a className="add" title="Add" data-toggle="tooltip">
          <i className="material-icons">&#xE03B;</i>
        </a>
        <a className="edit" title="Edit" data-toggle="tooltip">
          <i className="material-icons" onClick={() => handleEditClick()}>
            &#xE254;
          </i>
        </a>
        {/* Display the Edit popup here */}
        <EditExpense
          expenseDetails={expenseDetails}
          setExpenseDetails={setExpenseDetails}
          expEditPopup={expEditPopup}
          setExpEditPopup={setExpEditPopup}
          handleUpdate={handleUpdate}
        />

        <a className="delete" title="Delete" data-toggle="tooltip">
          <i className="material-icons" onClick={() => handleDeleteClick()}>
            &#xE872;
          </i>
          {/* Display the Delete popup here */}
          <DeleteExpense
            expenseDetails={expenseDetails}
            expDeletePopup={expDeletePopup}
            setExpDeletePopup={setExpDeletePopup}
            handleDelete={handleDelete}
          />
        </a>
      </td>
    </tr>
  );
}

export default DisplayExpense;
