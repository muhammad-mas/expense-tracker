import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

function ExpensesList(props) {
  function mapExpenses() {
    return props.filteredExpenses.map((expense) => {
      return (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          id={expense.id}
          date={expense.date}
        />
      );
    });
  }
  if (props.filteredExpenses.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }
  return <ul className="expenses-list">{mapExpenses()}</ul>;
}
export default ExpensesList;
