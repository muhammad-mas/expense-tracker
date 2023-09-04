import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
function Expenses({ expenses }) {
  const [year, setFilterYear] = useState("");

  function onSelectFilter(year) {
    setFilterYear(year);
  }
  function mapExpenses() {
    return expenses
      .filter((expense) => {
        if (year) {
          // console.log(
          //   expense.date.getFullYear() == year,
          //   expense.date.getFullYear() === year,
          //   expense.date.getFullYear(),
          //   year
          // );
          if (expense.date.getFullYear() == year) {
            return true;
          } else {
            return false;
          }
        } else {
          return true;
        }
      })
      .map((expense) => {
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

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={year}
        onFilterSelected={onSelectFilter}
      ></ExpensesFilter>
      {mapExpenses()}
    </Card>
  );
}
export default Expenses;
