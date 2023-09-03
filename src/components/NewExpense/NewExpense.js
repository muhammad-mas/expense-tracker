import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
  const onAddExpense = (expense) => {
    const expenseData = {
      ...expense,
      id: Math.random(),
    };
    props.onAddExpense(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={onAddExpense}></ExpenseForm>
    </div>
  );
};
export default NewExpense;
