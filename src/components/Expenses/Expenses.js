import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
function Expenses({ expenses }) {
  const [year, setFilterYear] = useState("");

  function onSelectFilter(year) {
    setFilterYear(year);
  }
  function mapExpenses() {
    return expenses.map((expense) => {
      return (
        <Card className="expenses" key={expense.id}>
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            id={expense.id}
            date={expense.date}
          />
        </Card>
      );
    });
  }
  return <div>{mapExpenses()}</div>;
}
export default Expenses;
