import React from "react";

function DisplayExpense({ expense }) {
  return (
    <tr>
      <td>{expense.name}</td>
      <td>{expense.date}</td>
      <td>{expense.category}</td>
      <td>{expense.description}</td>
      <td>{expense.payment_mode}</td>
      <td>{expense.value}</td>
      <td>
        <a className="add" title="Add" data-toggle="tooltip">
          <i className="material-icons">&#xE03B;</i>
        </a>
        <a className="edit" title="Edit" data-toggle="tooltip">
          <i className="material-icons">&#xE254;</i>
        </a>
        <a className="delete" title="Delete" data-toggle="tooltip">
          <i className="material-icons">&#xE872;</i>
        </a>
      </td>
    </tr>
  );
}

export default DisplayExpense;
